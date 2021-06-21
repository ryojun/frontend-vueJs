<template>
    <div class="login container">
        <div class="row">
            <div class="col-md-3"></div>
            <div class="col-md-6">
                <img src="/img/logo/Empty-logo.png" alt="Logo" class="img-logo">
                <div class="card">
                    <h1 class="card-header">
                        LOGIN
                    </h1>
                    <div class="card-body">
                        <Form @submit="onSubmit">
                            <div class="form-group">
                                <label for="">ชื่อผู้ใช้งาน :</label>
                                <Field type="text" name="u_username"
                                    v-model.trim="form.u_username"
                                    :rules="isRequired"
                                    class="form-control"/>
                                <ErrorMessage name="u_username" />
                            </div>

                            <div class="form-group">
                                <label for="">รหัสผ่าน</label>
                                <Field type="password" name="u_password"
                                    v-bind="field"
                                    v-model.trim="form.u_password"
                                    :rules="passwordRules"
                                    class="form-control"/>
                                <ErrorMessage name="u_password" />
                            </div>

                            <div v-if="errorMessage" class="alert alert-warning text-center">
                                {{ errorMessage }}
                            </div>

                            <div class="form-group buttons">
                                <button type="submit" class="btn btn-info btn-block">
                                    เข้าสู่ระบบ
                                </button>

                                <router-link to="/register" type="button" @click="onRedirectToRegister()" class="btn btn-secondary btn-block">
                                    ลงทะเบียน
                                </router-link>
                            </div>
                        </Form>

                    </div>
                </div>
            </div>
            <div class="col-md-3"></div>
        </div>
    </div>
</template>

<script>
import { Field, Form, ErrorMessage } from 'vee-validate';
import axios from "axios";
import router from "../router/index"

export default {
    data() {
        return {
            form: {
                u_username: "",
                u_password: ""
            },
            errorMessage: ""
        };
    },
    components: {
    Field,
    Form,
    ErrorMessage
    },
    methods: {
        isRequired(value) {
            if (value && value.trim()) {
                return true;
            }
            return 'This is required';
        },
        passwordRules(value){
            if (value && value.trim()) {
                if(value.length > 7){
                    return true;
                }
                return 'Your password must be between 8 and 30 characters.';
            }
            
            return 'This is required';
        },
        // ส่งข้อมูลไปตรวจสอบ
        onSubmit() {
            try{
                axios
                    .post("api/account/login",this.form)
                    .then(response => {
                        this.onRedirectToHome();
                    })
                    .catch(err => {this.errorMessage = err.response.data.message});
                
            }catch (ex) {
                console.log(ex);
            }
        },
        // ล้างค่า Form
        onReset() {
            this.errorMessage = null;
            this.$validator.reset();
            this.form = {
                u_username: "",
                u_password: ""
            };
        },
        onRedirectToHome() {
            router.push({ name: "Home" })
        }
    }
};
</script>

<style scoped>
.Login {
  max-width: 500px;
  margin: 3% auto;
}
.img-logo {
  width: 90%;
  height: 20%;
  display: block;
  margin: auto;
  margin-top: 1%;
  margin-bottom: 10px;
}
h1 {
  font-size: 18px;
  font-weight: 600;
  text-align: center;
  letter-spacing: 5px;
}
.card {
  margin-bottom: 15%;
}
.card-body {
  padding-left: 15%;
  padding-right: 15%;
}
.buttons .btn-info {
    width: 100%;
    margin-top: 0px;
}
.buttons .btn-secondary {
    width: 100%;
    margin-top: 10px;
}
.buttons
.router-link {
  margin-top: 30px;
  margin-bottom: 50px;
}
.form-group {
    margin-bottom: 2%;
}
</style>


