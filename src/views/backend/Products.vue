<template>
  <div class="backend">
    <loading :active.sync="isLoading"></loading>
    <DelModal
    :tempProduct="tempProduct"
    :opendelmodal="showDelModal"
    @deleteproduct="deleteProduct"
    @closedelmodal="closeDelModal"/>
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
            <th>Sale</th>
            <th>Edit / Delete</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="item in products" :key="item.id">
            <td>{{ item.category }}</td>
            <td>{{ item.title }}</td>
            <td>
              <img :src="item.imageUrl[0]" alt="">
            </td>
            <td>{{ item.origin_price }}</td>
            <td>{{ item.price }}</td>
            <td>
              <button
               type="button"
               class="editbtn"
               @click="openModal('edit', item)">Edit</button>
              <button
               type="button"
               class="delbtn"
               @click="openModal('delete', item)">Delete</button>
            </td>
          </tr>
        </tbody>
      </table>
      <Pagination
      :page="pagination" @updatepage="getProducts" />
    </div>

    <div class="modal" :class="{'show':showModal}">
    <div class="modal-header">
      <div>
        <h1 v-if="isNew">新增產品</h1>
        <h1 v-else>編輯產品</h1>
      </div>
      <div class="modal-header-close">
        <button type="button" @click="closeModal">
          <span>&times;</span>
        </button>
      </div>
    </div>
    <div class="modal-body">
      <div class="modal-body-img">
        <div>
          <label for="imgurl">輸入圖片網址</label>
          <input
           id="imgurl"
           type="text"
           v-model="tempProduct.imageUrl[0]"
           placeholder="請輸入圖片連結" />
        </div>
        <div>
          <label for="uploadimg">或 上傳圖片
              <i
              v-if="status.fileUploading"
              class="fas fa-spinner fa-spin"></i>
          </label>
          <input
           id="uploadimg"
           ref="file"
           type="file"
           @change="uploadFile"/>
        </div>
        <div class="modal-body-img-show">
            <img :src="tempProduct.imageUrl[0]"  alt />
        </div>
      </div>
      <div class="modal-body-content">
        <div class="modal-body-content-title">
          <div>
            <label for="title">產品名稱</label>
            <input
             id="title"
             type="text"
             v-model="tempProduct.title"
             placeholder="請輸入產品名稱" />
          </div>
          <div>
            <label for="category">類別</label>
            <input
             id="category"
             type="text"
             list="items"
             v-model="tempProduct.category"
             required />
            <datalist name="類別" id="items">
              <option value="candle">大豆蠟燭</option>
              <option value="oil">香氛精油</option>
              <option value="diffuse">香氛擴香</option>
              <option value="jar">香氛香膏</option>
            </datalist>
          </div>
          <div>
            <div>
              <label for="price">售價</label>
              <input
               id="price"
               type="number"
               v-model="tempProduct.price"
               placeholder="請輸入售價" />
            </div>
            <div>
              <!-- <label for="stock">庫存量</label>
              <input
               id="stock"
               type="number"
               v-model="tempProduct.options.stock"
               placeholder="請輸入庫存量" /> -->
            </div>
          </div>
        </div>
        <div class="modal-body-describe">
          <div>
            <!-- <label for="discount">產品優惠</label>
            <textarea
             id="discount"
             type="text"
             v-model="tempProduct.options.discount"
             placeholder="請輸入產品優惠訊息"></textarea> -->
          </div>
          <div>
            <label for="description">產品描述</label>
            <textarea
             id="description"
             type="text"
             v-model="tempProduct.description"
             placeholder="請輸入商品描述"></textarea>
          </div>
          <div>
            <label for="content">注意事項</label>
            <textarea
             id="content"
             type="text"
             v-model="tempProduct.content"
             placeholder="請輸入注意事項"></textarea>
          </div>
        </div>
      </div>
    </div>
    <div class="modal-footer">
      <button
       type="button"
       class="modal-footer-close"
       @click="closeModal">
       關閉
      </button>
      <button
       type="button"
       class="modal-footer-sure"
       @click="addProduct"
       v-if="isNew">
       確認新增
      </button>
      <button
       type="button"
       class="modal-footer-sure"
       @click="updateProduct(tempProduct.id)"
       v-else>
       確定更新
      </button>
    </div>
  </div>
  </div>
</template>
<script>
import Pagination from '@/components/Pagination.vue';
import DelModal from '@/components/DelModal.vue';

export default {
  components: {
    Pagination,
    DelModal,
  },
  data() {
    return {
      products: [],
      tempProduct: {
        imageUrl: [],
        options: {},
      },
      status: {
        fileUploading: false,
      },
      isNew: false,
      showModal: false,
      showDelModal: false,
      token: '',
      isLoading: false,
      pagination: {},
    };
  },
  props: [' token'],
  methods: {
    getProducts(num = 1) {
      this.isLoading = true;
      this.axios
        .get(
          `${process.env.VUE_APP_ApiPath}/api/${process.env.VUE_APP_UUID}/admin/ec/products?page=${num}`,
        )
        .then((res) => {
          console.log('admin/products', res.data);
          this.isLoading = false;
          this.products = res.data.data;
          this.pagination = res.data.meta.pagination;
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
        .then((res) => {
          this.isLoading = false;
          console.log('add', res.data.data);
          this.tempProduct = res.data.data;
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
        .then((res) => {
          this.isLoading = false;
          this.tempProduct = res.data.data;
          this.getProducts();
          this.closeModal();
          this.tempProduct = {
            imageUrl: [],
            options: {},
          };
        })
        .catch((err) => {
          this.isLoading = false;
          console.log(err.response.data.message);
        });
    },
    deleteProduct() {
      this.isLoading = true;
      this.axios
        .delete(
          `${process.env.VUE_APP_ApiPath}/api/${process.env.VUE_APP_UUID}/admin/ec/product/${this.tempProduct.id}`,
        )
        .then((res) => {
          console.log(res);
          this.isLoading = false;
          this.showDelModal = false;
          this.tempProduct = {
            imageUrl: [],
            options: {},
          };
          this.getProducts();
        })
        .catch((err) => {
          this.isLoading = false;
          console.log(err.response.data.message);
        });
    },
    uploadFile() {
      const uploadedFile = this.$refs.file.files[0];
      const formData = new FormData();
      formData.append('file', uploadedFile);
      const url = `${process.env.VUE_APP_ApiPath}/api/${process.env.VUE_APP_UUID}/admin/storage`;
      this.status.fileUploading = true;
      this.axios.post(url, formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      }).then((res) => {
        this.status.fileUploading = false;
        if (res.status === 200) {
          this.tempProduct.imageUrl.push(res.data.data.path);
        }
      }).catch(() => {
        this.status.fileUploading = false;
        console.log('upload err');
      });
    },
    openModal(isNew, item) {
      switch (isNew) {
        case 'new':
          this.isNew = true;
          this.showModal = true;
          this.tempProduct = {
            imageUrl: [],
            options: {
              stock: '',
              discount: '',
            },
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
