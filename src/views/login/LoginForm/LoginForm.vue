<template>
  <el-form ref="loginFormRef" :model="loginForm" :rules="loginRules">
    <el-form-item prop="username"> 
      <el-input v-model="loginForm.username" placeholder="用户名">
        <template #prefix>
          <el-icon><User/></el-icon>
        </template>
      </el-input>
    </el-form-item>
    <el-form-item>
     <el-input v-model="loginForm.password" placeholder="密码">
      <template #prefix>
        <el-icon><Lock/></el-icon>
      </template>
    </el-input>
    </el-form-item>
  </el-form>
  <div class="loginForm_button">
    <el-button class="login_button" :icon="UserFilled" type="primary" @click="login(loginFormRef)" :loading="loading" >登录</el-button>
    <el-button class="reset_button" :icon="CircleClose" type="primary" @click="reset(loginFormRef)" plain>重置</el-button>
  </div>
</template>
<script setup lang="ts">
import { ref,reactive } from "vue";
import {Login} from "@/api/interface/index";
import type {ElForm} from "element-plus";
import {useRouter} from "vue-router";
import { HOME_URL } from "@/config/config";
import { CircleClose,UserFilled} from "@element-plus/icons-vue";
type ElFormInstance =InstanceType<typeof ElForm>
const loginFormRef = ref<ElFormInstance>();
const loginForm=reactive<Login.ReqLoginForm>({username:'',password:''});

//使用路由
const router=useRouter();

//登录表单校验规则
const loginRules=reactive({
  username:[{required:true,message:"请输入账号！",trigger:'blur'}],
  password:[{required:true,message:'请输入密码！',trigger:'blur'}]
})

const loading=ref(false);

//登录
const login=(formEl:ElFormInstance|undefined)=>{
      if(!formEl) return;
      formEl.validate((valid,fields)=>{
        if(valid){
          setTimeout(()=>{
            loading.value=true;
            router.push(HOME_URL);
          },1000)
        }
      })
}
//重置表单
const reset=(formEl:ElFormInstance|undefined)=>{

}

</script>
<style scoped lang="scss">
@import "../index.scss";
</style>
