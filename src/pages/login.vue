<template>
  <div class="wrapper">
    <div class="particles-wrapper">
      <vue-particles
        class="item"
        color="#409EFF"
        :particleOpacity="0.7"
        :particlesNumber="60"
        shapeType="circle"
        :particleSize="5"
        linesColor="#409EFF"
        :linesWidth="1"
        :lineLinked="true"
        :lineOpacity="0.4"
        :linesDistance="150"
        :moveSpeed="3"
        :hoverEffect="true"
        hoverMode="grab"
        :clickEffect="true"
        clickMode="push"
      >
      </vue-particles>
    </div>
    <div class="back-icon-wrapper">
      <el-button
        icon="el-icon-arrow-left"
        class="back-icon"
        circle
        @click="back"
      ></el-button>
    </div>
    <div class="change-icon-wrapper">
      <el-button
        round
        class="change-icon"
        @click="changeStatus"
        v-if="isLogin"
      >跳转到注册</el-button>
      <el-button
        round
        class="change-icon"
        @click="changeStatus"
        v-else
      >跳转到登录</el-button>
    </div>
    <div class="container">
      <div
        v-bind:class="{ leave: isLogin, enter: !isLogin}"
        class="from-wrapper"
      >
        <el-form
          ref="registerForm"
          :rules="fromRules.registerRules"
          label-width="70px"
          :model="formLabelAlignRegister"
        >
          <el-form-item
            label="姓名"
            prop="userName"
          >
            <el-input v-model="formLabelAlignRegister.userName"></el-input>
          </el-form-item>
          <el-form-item
            label="学号"
            prop="studentId"
          >
            <el-input v-model="formLabelAlignRegister.studentId"></el-input>
          </el-form-item>
          <el-form-item
            label="专业"
            prop="major"
          >
            <el-input v-model="formLabelAlignRegister.major"></el-input>
          </el-form-item>
          <el-form-item
            label="邮箱"
            prop="mail"
          >
            <el-input v-model="formLabelAlignRegister.mail"></el-input>
          </el-form-item>
          <el-form-item
            label="密码"
            prop="password"
          >
            <el-input
              :show-password="true"
              type="password"
              v-model="formLabelAlignRegister.password"
            ></el-input>
          </el-form-item>
          <el-form-item
            label="方向"
            prop="directions"
          >
            <el-checkbox-group v-model="formLabelAlignRegister.directions">
              <el-checkbox
                label="前端"
                name="1"
              ></el-checkbox>
              <el-checkbox
                label="java后端"
                name="2"
              ></el-checkbox>
              <el-checkbox
                label="安卓"
                name="3"
              ></el-checkbox>
            </el-checkbox-group>
          </el-form-item>
          <el-form-item>
            <el-button
              round
              class="submit-buttom"
              @click="register"
            >注册</el-button>
          </el-form-item>
        </el-form>
      </div>
    </div>
    <div
      v-bind:class="{ enter: isLogin, leave: !isLogin}"
      class="from-wrapper back"
    >
      <el-form
        ref="loginForm"
        label-width="70px"
        :model="formLabelAlignLogin"
        :rules="fromRules.LoginRules"
      >
        <el-form-item
          label="学号"
          prop="studentId"
        >
          <el-input v-model="formLabelAlignLogin.studentId"></el-input>
        </el-form-item>
        <el-form-item
          label="密码"
          prop="password"
        >
          <el-input
            :show-password="true"
            type="password"
            v-model="formLabelAlignLogin.password"
          ></el-input>
        </el-form-item>
        <el-form-item
          label="验证码"
          prop="verifyCode"
        >
          <el-input v-model="formLabelAlignLogin.verifyCode"></el-input>
          <img
            class="code-img"
            :src="codeSrc"
            alt=""
            @click="changeCode"
          >
        </el-form-item>
        <el-form-item>
          <el-button
            @click="login"
            round
            class="submit-buttom"
          >登录</el-button>
        </el-form-item>
      </el-form>
    </div>
  </div>
</template>

<script>
import apiList from '../assets/js/api'
export default {
  data () {
    return {
      codeSrc: '',
      isLogin: true,
      formLabelAlignLogin: {
        studentId: '',
        password: '',
        verifyCode: ''
      },
      formLabelAlignRegister: {
        studentId: '',
        password: '',
        userName: '',
        mail: '',
        major: '',
        directions: []
      },
      fromRules: {
        registerRules: {
          userName: [
            { required: true, message: '请输入用户名', trigger: 'blur' },
            {
              min: 2,
              max: 15,
              message: '长度在 2 到 15 个字符',
              trigger: 'blur'
            }
          ],
          password: [
            { required: true, message: '请输入密码', trigger: 'blur' },
            {
              min: 6,
              max: 20,
              message: '长度在 6 到 20 个字符',
              trigger: 'blur'
            }
          ],
          studentId: [
            { required: true, message: '请输入学号', trigger: 'blur' },
            {
              min: 5,
              max: 15,
              message: '长度在 5 到 15 个字符',
              trigger: 'blur'
            }
          ],
          mail: [{ required: true, message: '请输入邮箱', trigger: 'blur' }],
          directions: [
            {
              required: true,
              message: '请至少选择一个技术方向',
              trigger: 'change'
            }
          ],
          major: [{ required: true, message: '请输入专业', trigger: 'change' }]
        },
        LoginRules: {
          studentId: [
            { required: true, message: '请输入学号', trigger: 'blur' },
            {
              min: 5,
              max: 15,
              message: '长度在 5 到 15 个字符',
              trigger: 'blur'
            }
          ],
          password: [
            { required: true, message: '请输入密码', trigger: 'blur' },
            {
              min: 5,
              max: 20,
              message: '长度在 5 到 20 个字符',
              trigger: 'blur'
            }
          ],
          verifyCode: [
            { required: true, message: '请输入验证码', trigger: 'change' },
            { min: 4, max: 8, message: '长度在 4 到 8 个字符', trigger: 'blur' }
          ]
        }
      }
    }
  },
  mounted () {
    this.verifyCode()
  },
  methods: {
    verifyCode () {
      this.codeSrc = apiList.createVerifyCode + '?id=' + Math.random()
    },
    changeCode () {
      this.verifyCode()
    },
    back () {
      this.$router.push({ path: '/index' })
    },
    changeStatus () {
      this.isLogin = !this.isLogin
    },
    register () {
      this.formLabelAlignRegister.directions = this.formLabelAlignRegister.directions.map(
        item => {
          if (item === '前端') {
            return 1
          } else if (item === 'java后端') {
            return 2
          } else if (item === '安卓') {
            return 3
          }
        }
      )
      this.$refs['registerForm'].validate(valid => {
        if (valid) {
          let str = ''
          this.formLabelAlignRegister.directions.forEach((item, index) => {
            str = str + '&directions=' + index
          })
          this.$axios
            .post(
              `${apiList.addUser}?userName=${
                this.formLabelAlignRegister.userName
              }&password=${this.formLabelAlignRegister.password}&studentId=${
                this.formLabelAlignRegister.studentId
              }&mail=${this.formLabelAlignRegister.mail}&major=${
                this.formLabelAlignRegister.major
              }` + str
            )
            .then(res => {
              if (res.data.msg === '成功') {
                alert('注册成功！')
                this.changeStatus()
              } else {
                alert('注册失败！')
              }
            })
        } else {
          alert('您输入的字段有误！')
          return false
        }
      })
    },
    login () {
      this.$refs['loginForm'].validate(valid => {
        if (valid) {
          this.$axios
            .post(apiList.login, this.formLabelAlignLogin, {
              withCredentials: true
            })
            .then(res => {
              if (res.data.msg === '成功') {
                alert('登录成功！')
                this.$store.dispatch('getUserInfo')
                this.$router.push({ path: '/index' })
              } else {
                alert('登录失败！')
                this.changeCode()
              }
            })
        } else {
          alert('您输入的字段有误！')
          return false
        }
      })
    }
  }
}
</script>

<style lang="stylus" scoped>
@import '../common/styles/common.styl';

.wrapper {
  width: 100%;
  height: 100vh;
  overflow: hidden;
  transition: 1s;
  background: rgb(244, 244, 245)

  @media screen and (max-width: $view-small) {
    height: 150vh;
  }

  .particles-wrapper {
    width: 100%;
    height: 100%;
    float: left;
  }

  .back-icon-wrapper {
    position: absolute;

    .back-icon {
      color: #409EFF;
      border-color #409EFF;
      background: white;
      margin: 30px;
      transition: 1s;
    }

    .back-icon:hover {
      background: rgb(140, 197, 255);
    }
  }

  .change-icon-wrapper {
    position: absolute;
    right: 0;

    .change-icon {
      color: #409EFF;
      background: white;
      border-color #409EFF;
      margin: 30px;
      transition: 1s;
    }

    .change-icon:hover {
      background: rgb(140, 197, 255);
    }
  }

  .from-wrapper {
    z-index: 999;
    position: absolute;
    padding: 20px;
    width: 450px;
    backface-visibility: hidden;
    top: 5%;
    left: 0;
    padding: auto 0;
    right: 0;
    margin: auto;
    transition: 2s;
    background: white;
    box-shadow 1px
    border-radius 10px;
    margin-top 30px

    @media screen and (max-width: $view-small) {
      width: 88%;
      top: 100px;
    }

    .submit-buttom {
      height: 100%;
      width: 100%;
      color: black;
      transition: 1s;
      font-size: 15px;
    }
  }
}

.back {
  position: relative;
  transform: rotateY(-180deg);
}

.leave {
  transform: rotateY(-180deg);
}

.enter {
  transform: rotateY(-360deg);
}

.code-img {
  float: left;
  width: 120px;
  height: 50px;
}

.code-img:hover {
  cursor: pointer;
}

#particles-js {
  height: 100%;
  width: 100%;
}

.container {
  perspective: 500;
}

.el-form-item__label {
  color: white;
}
</style>
