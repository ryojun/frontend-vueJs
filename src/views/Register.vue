<template>
    <div class="register container">
        <div class="row">
            <div class="col-md-3"></div>
            <div class="col-md-6">
                <img src="/img/logo/Empty-logo.png" alt="Logo" class="img-logo">
                <div class="card">
                    <h1 class="card-header">
                        REGISTER
                    </h1>
                    <div class="card-body">
                        <div v-if="errorMessage" class="alert alert-danger text-center">
                            {{ errorMessage}}
                        </div>
                        <Form @submit="onSubmit">
                            <div class="form-group">
                                <label for="">ชื่อผู้ใช้งาน :</label>
                                <Field type="text" name="userBox"
                                    v-model.trim="form.u_username"
                                    :rules="isRequired"
                                    class="form-control"/>
                                <ErrorMessage name="userBox" />
                            </div>

                            <div class="form-group">
                                <label for="">รหัสผ่าน</label>
                                <Field type="password" name="passwordBox"
                                    v-bind="field"
                                    v-model.trim="form.u_password"
                                    :rules="passwordRules"
                                    class="form-control"/>
                                <ErrorMessage name="passwordBox" />
                            </div>

                            <div class="form-group">
                                <label for="">ชื่อ</label>
                                <Field type="text" name="firstnameBox"
                                    v-model.trim="form.u_firstname"
                                    :rules="isRequired"
                                    class="form-control"/>
                                <ErrorMessage name="firstnameBox" />
                            </div>

                            <div class="form-group">
                                <label for="">นามสกุล</label>
                                <Field type="text" name="lastnameBox"
                                    v-model.trim="form.u_lastname"
                                    :rules="isRequired"
                                    class="form-control"/>
                                <ErrorMessage name="lastnameBox" />
                            </div>
                            
                            <div class="form-group buttons">
                                <button type="submit" class="btn btn-info btn-block">
                                    ลงทะเบียน
                                </button>

                                <button type="button" class="btn btn-secondary btn-block">
                                    เข้าสู่ระบบ
                                </button>
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
import VueAxios from "vue-axios";
import axios from "axios";

export default {
    data() {
        return {
            form: {
                u_username: "",
                u_password: "",
                u_firstname: "",
                u_lastname: ""
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
        // บันทึกข้อมูลลงทะเบียน
        onSubmit() {
            try{
                axios
                    .post("api/account/register",this.form)
                    .then(response => {this.onReset()})
                    .catch(err => {this.errorMessage = err.response.data.message});
            }catch (ex) {
                console.log(ex);
            }
        },
        // ล้างค่า Form
        onReset() {
            this.errorMessage = null;
            this.form = {
                u_username: "",
                u_password: "",
                u_firstname: "",
                u_lastname: ""
            };
        }
                
            }
    
};
</script>

<style scoped>
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
.buttons {
  margin-top: 30px;
  margin-bottom: 50px;
}
.form-group {
    margin-bottom: 2%;
}
</style>


