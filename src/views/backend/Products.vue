<template>
  <div class="backend">
    <loading :active.sync="isLoading"></loading>
    <Modal
      :isNew="isNew"
      :openmodal="showModal"
      :tempProduct="tempProduct"
      @addproduct="addProduct"
      @updateproduct="updateProduct"
      @closemodal="closeModal"/>
    <DelModal
      :tempProduct="tempProduct"
      :opendelmodal="showDelModal"
      @deleteproduct="deleteProduct"
      @closedelmodal="closeDelModal"
    />
    <div class="container">
      <h1>Products</h1>
      <button class="addbtn" type="button" @click="openModal('new')">新增產品</button>
      <table>
        <thead>
          <tr>
            <th>Category</th>
            <th>Brand</th>
            <th>Image</th>
            <th>Price</th>
            <th>Enabled</th>
            <th>Edit / Delete</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="item in products" :key="item.id">
            <td>{{ item.category }}</td>
            <td>{{ item.title }}</td>
            <td>
              <img :src="item.imageUrl[0]" alt />
            </td>
            <td>{{ item.price }}</td>
            <td>
               <label class="container">
                <input
                 type="checkbox"
                 v-model="item.enabled">
                <span class="checkmark"></span>
                <p>上架</p>
              </label>
            </td>
            <td>
              <button
               type="button"
               class="editbtn"
               @click="openModal('edit', item)">
               Edit
              </button>
              <button
               type="button"
               class="delbtn"
               @click="openModal('delete', item)">
               Delete
              </button>
            </td>
          </tr>
        </tbody>
      </table>
      <Pagination :page="pagination" @updatepage="getProducts" />
    </div>
  </div>
</template>
<script>
import Pagination from '@/components/Pagination.vue';
import Modal from '@/components/Modal.vue';
import DelModal from '@/components/DelModal.vue';

export default {
  components: {
    Pagination,
    Modal,
    DelModal,
  },
  data() {
    return {
      products: [],
      tempProduct: {
        imageUrl: [],
      },
      isNew: false,
      showModal: false,
      showDelModal: false,
      token: '',
      isLoading: false,
      pagination: {},
    };
  },
  methods: {
    getProducts(num = 1) {
      this.isLoading = true;
      this.axios
        .get(
          `${process.env.VUE_APP_ApiPath}/api/${process.env.VUE_APP_UUID}/admin/ec/products?page=${num}`,
        )
        .then((res) => {
          this.isLoading = false;
          this.products = res.data.data;
          this.pagination = res.data.meta.pagination;
          console.log('admin/products', this.pagination);
        })
        .catch((err) => {
          this.isLoading = false;
          console.log('err', err.response.data.message);
        });
    },
    getProduct(id) {
      this.isLoading = true;
      this.axios
        .get(
          `${process.env.VUE_APP_ApiPath}/api/${process.env.VUE_APP_UUID}/admin/ec/product/${id}`,
        )
        .then((res) => {
          this.isLoading = false;
          this.tempProduct = res.data.data;
        })
        .catch((err) => {
          this.isLoading = false;
          console.log(err.response.data.message);
        });
    },
    addProduct() {
      this.isLoading = true;
      this.axios
        .post(
          `${process.env.VUE_APP_ApiPath}/api/${process.env.VUE_APP_UUID}/admin/ec/product`,
          this.tempProduct,
        )
        .then(() => {
          this.isLoading = false;
          this.getProducts();
          this.closeModal();
        })
        .catch((err) => {
          this.isLoading = false;
          console.log(err.response.data.message);
        });
    },
    updateProduct(id) {
      this.isLoading = true;
      this.axios
        .patch(
          `${process.env.VUE_APP_ApiPath}/api/${process.env.VUE_APP_UUID}/admin/ec/product/${id}`,
          this.tempProduct,
        )
        .then(() => {
          this.isLoading = false;
          this.getProducts();
          this.closeModal();
        })
        .catch((err) => {
          this.isLoading = false;
          console.log(err.response.data.message);
        });
      this.tempProduct = {
        imageUrl: [],
      };
    },
    deleteProduct() {
      this.isLoading = true;
      this.axios
        .delete(
          `${process.env.VUE_APP_ApiPath}/api/${process.env.VUE_APP_UUID}/admin/ec/product/${this.tempProduct.id}`,
        )
        .then(() => {
          this.isLoading = false;
          this.showDelModal = false;
          this.getProducts();
        })
        .catch((err) => {
          this.isLoading = false;
          console.log(err.response.data.message);
        });

      this.tempProduct = {
        imageUrl: [],
      };
    },
    openModal(isNew, item) {
      switch (isNew) {
        case 'new':
          this.isNew = true;
          this.showModal = true;
          this.tempProduct = {
            imageUrl: [],
          };
          break;
        case 'edit':
          this.isNew = false;
          this.tempProduct = JSON.parse(JSON.stringify(item));
          this.getProduct(this.tempProduct.id);
          this.showModal = true;
          break;
        case 'delete':
          this.tempProduct = { ...item };
          this.showDelModal = true;
          break;
        default:
          break;
      }
    },
    closeModal() {
      this.showModal = false;
    },
    closeDelModal() {
      this.showDelModal = false;
    },
  },
  created() {
    this.token = document.cookie.replace(
      /(?:(?:^|.*;\s*)MikoToken\s*=\s*([^;]*).*$)|^.*$/,
      '$1',
    );
    this.axios.defaults.headers.common.Authorization = `Bearer ${this.token}`;
    this.getProducts();
  },
};
</script>
