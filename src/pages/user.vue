<template>
  <div class="wrapper">
    <div class="particles-wrapper">
      <div class="icon-wrapper">
        <div class="back-wrapper" @click="back">
          <el-button type="primary" icon="el-icon-arrow-left" circle></el-button>
        </div>
        <div class="modify-info-wrapper">
          <el-button type="primary" @click="dialogTableModifyInfo = true">修改信息</el-button>
        </div>
        <div class="modify-password-wrapper">
          <el-button type="primary" @click="dialogTableModifyPassword = true">修改密码</el-button>
        </div>
      </div>
      <vue-particles
        class="item"
        color="#409EFF"
        :particleOpacity="0.7"
        :particlesNumber="80"
        shapeType="circle"
        :particleSize="2"
        linesColor="#409EFF"
        :linesWidth="1"
        :lineLinked="true"
        :lineOpacity="0.4"
        :linesDistance="150"
        :moveSpeed="3"
        :hoverEffect="true"
        hoverMode="grab"
        :clickEffect="false"
        clickMode="push"
      >
      </vue-particles>
    </div>
    <div class="container">
      <el-row :gutter="20">
        <img class="head" :src="userInfo.headUrl" alt="" onerror="this.src='../../static/img/head.png'">
      </el-row>
      <el-row :gutter="20">
        <el-col :span="12"><div class="label">姓名</div></el-col>
        <el-col :span="12"><div class="content">{{ userInfo.userName }}</div></el-col>
      </el-row>
      <el-row :gutter="20">
        <el-col :span="12"><div class="label">学号</div></el-col>
        <el-col :span="12"><div class="content">{{ userInfo.studentId }}</div></el-col>
      </el-row>
      <el-row :gutter="20">
        <el-col :span="12"><div class="label">专业</div></el-col>
        <el-col :span="12"><div class="content">{{ userInfo.major }}</div></el-col>
      </el-row>
      <el-row :gutter="20">
        <el-col :span="12"><div class="label">技术方向</div></el-col>
        <el-col :span="12"><div class="content">{{ showDirections }}</div></el-col>
      </el-row>
    </div>
    <el-dialog title="修改信息" :visible.sync="dialogTableModifyInfo">
  <el-form
          ref="ModifyInfoForm"
          :rules="fromRules.ModifyInfoRules"
          label-width="70px"
          :model="formLabelAlignModifyInfo"
        >
          <el-form-item  label="头像">
            <input type="file" @change="addImg($event)" ref="input">
            <!-- <el-input type="file" @change.native="addImg($event)" ref="input"></el-input> -->
          </el-form-item>
          <el-form-item label="姓名" prop="userName">
            <el-input v-model="formLabelAlignModifyInfo.userName"></el-input>
          </el-form-item>
          <el-form-item label="专业" prop="major">
            <el-input v-model="formLabelAlignModifyInfo.major"></el-input>
          </el-form-item>
          <el-form-item
            label="方向"
            prop="directions"
          >
            <el-checkbox-group v-model="formLabelAlignModifyInfo.directions">
              <el-checkbox
                label="前端"
                name="前端"
              ></el-checkbox>
              <el-checkbox
                label="java后端"
                name="java后端"
              ></el-checkbox>
              <el-checkbox
                label="安卓"
                name="安卓"
              ></el-checkbox>
            </el-checkbox-group>
          </el-form-item>
        </el-form>
          <div slot="footer" class="dialog-footer">
    <el-button @click="dialogTableModifyInfo = false">取 消</el-button>
    <el-button type="primary" @click="modifyInfo">确认修改</el-button>
  </div>

</el-dialog>

<el-dialog title="修改密码"  :visible.sync="dialogTableModifyPassword">
  <el-form
          ref="ModifyInfoForm"
          :rules="fromRules.ModifyPasswordRules"
          label-width="100px"
          :model="formLabelAlignModifyPassword"
        >
          <el-form-item label="新密码" prop="password">
            <el-input v-model="formLabelAlignModifyPassword.password"></el-input>
          </el-form-item>

          <el-form-item label="邮箱验证码" prop="verifyCode">
            <el-row :gutter="0">
              <el-col :span="18"><el-input v-model="formLabelAlignModifyPassword.mailVerifyCode"></el-input></el-col>
              <el-col :span="6"><el-button size="small" @click="sendCode">发送验证码</el-button></el-col>
            </el-row>
          </el-form-item>
        </el-form>
  <div>
    <el-button @click="dialogTableModifyPassword = false">取 消</el-button>
    <el-button type="primary" @click="modifyPassword">确认修改</el-button>
  </div>

</el-dialog>

  </div>
</template>

<script>
import apiList from '../assets/js/api'
import { mapGetters } from 'vuex'

export default {
  data () {
    return {
      formLabelAlignModifyInfo: {
        file: '',
        userName: '',
        major: '',
        directions: []
      },
      formLabelAlignModifyPassword: {
        password: '',
        mailVerifyCode: ''
      },
      fromRules: {
        ModifyInfoRules: {
          userName: [
            { required: true, message: '请输入用户名', trigger: 'blur' },
            { min: 2, max: 15, message: '长度在 2 到 15 个字符', trigger: 'blur' }
          ],
          directions: [
            { required: true, message: '请至少选择一个技术方向', trigger: 'change' }
          ],
          major: [
            { required: true, message: '请输入专业', trigger: 'change' }
          ]
        },
        ModifyPasswordRules: {
          verifyCode: [
            { required: true, message: '请输入验证码', trigger: 'change' },
            { min: 4, max: 8, message: '长度在 4 到 8 个字符', trigger: 'blur' }
          ],
          password: [
            { required: true, message: '请输入密码', trigger: 'blur' },
            { min: 6, max: 20, message: '长度在 6 到 20 个字符', trigger: 'blur' }
          ]
        }
      },
      dialogTableModifyInfo: false,
      dialogTableModifyPassword: false
    }
  },
  computed: {
    ...mapGetters([
      'userInfo'
    ]),
    showDirections () {
      let arr = ['前端', 'java后端', '安卓']
      let str = ''
      this.userInfo.directions.forEach((item, index) => {
        if (index === 0) {
          str += arr[item]
        } else {
          str = str + '，' + arr[item]
        }
      })
      return str
    }
  },
  methods: {
    addImg (e) {
      let file = e.target.files[0]
      let formdata = new FormData()
      formdata.append('file', file)
      this.formLabelAlignModifyInfo.file = formdata
    },
    back () {
      this.$router.push({ path: '/index' })
    },
    sendCode () {
      this.$axios.get(apiList.sendMail)
      alert('验证码已发送')
    },
    modifyInfo (e) {
      this.dialogTableModifyInfo = false
      this.formLabelAlignModifyInfo.directions = this.formLabelAlignModifyInfo.directions.map(
        item => {
          if (item === '前端') {
            return 0
          } else if (item === 'java后端') {
            return 1
          } else if (item === '安卓') {
            return 2
          }
        }
      )
      this.formLabelAlignModifyInfo.directions = this.formLabelAlignModifyInfo.directions.filter(item => item !== undefined)
      this.$refs['ModifyInfoForm'].validate(valid => {
        if (valid) {
          let str = ''
          this.formLabelAlignModifyInfo.directions.forEach((item, index) => {
            str = str + '&directions=' + item
          })
          this.$axios
            .post(
              `${apiList.updateInfo}?userName=${
                this.formLabelAlignModifyInfo.userName
              }&major=${
                this.formLabelAlignModifyInfo.major
              }` + str, this.formLabelAlignModifyInfo.file)
            .then(res => {
              if (res.data.msg === '成功') {
                alert('修改成功！')
                this.$store.dispatch('getUserInfo')
              } else {
                alert('修改失败！')
              }
            })
        } else {
          alert('您输入的字段有误！')
          return false
        }
      })
    },
    modifyPassword () {
      this.dialogTableModifyPassword = false
      this.$axios
        .post(
          `${apiList.updatePassword}?password=${
            this.formLabelAlignModifyPassword.password
          }&mailVerifyCode=${
            this.formLabelAlignModifyPassword.mailVerifyCode
          }`)
        .then(res => {
          if (res.data.msg === '成功') {
            alert('修改成功！')
          } else {
            alert('修改失败！')
          }
        })
    }
  },
  mounted () {
    // console.log(this.userInfo)
    this.formLabelAlignModifyInfo.userName = this.userInfo.userName
    this.formLabelAlignModifyInfo.major = this.userInfo.major
  }
}
</script>

<style lang="stylus" scoped>
 @import '../common/styles/varibles.styl'
.wrapper
  width 100%
  height 80vh
  transition 1s
  .particles-wrapper
    width 100%
    height 99vh
    position absolute
    .icon-wrapper
      position absolute
      .back-wrapper
        position absolute
        top 50px
        left 5vw
        @media screen and (max-width: $view-small)
          top 50px
      .modify-info-wrapper
        position absolute
        top 50px
        left 85vw
        @media screen and (max-width: $view-small)
          top 87vh
          left 10vw
      .modify-password-wrapper
        position absolute
        top 120px
        left 85vw
        @media screen and (max-width: $view-small)
          top 87vh
          left 70vw
  .container
    padding-top 60px
    height 100%
    width 40%
    margin auto
    @media screen and (max-width: $view-small)
      width 80%
    .head
      width 120px
      height 120px
      background grey
      border-radius 50%
      margin-bottom 20px
    .label
      font-size 20px
      margin-top 10px
      font-family $label-font
      height 40px
      @media screen and (max-width: $view-small)
        font-size 15px
    .content
      font-size 15px
      margin-top 10px
      font-family $main-text
      text-align center
      @media screen and (max-width: $view-small)
        font-size 10px
#particles-js {
  height: 100%;
  width: 100%;
}
.el-form-item__label {
  color: black
}
</style>

<style>
.el-form-item__label {
  color: black
}
</style>
