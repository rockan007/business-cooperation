import Vue from 'vue'
import Router from 'vue-router'
import BusinessVerify from '@/views/business-verify'
import OrganizationHome from '@/views/organization/organization-home'
import MemberHome from '@/views/member/member-home'
import OrganizationVerify from '@/views/organization/organization-verify'
import MemberVerify from '@/views/member/member-verify'
import EnterpriseInfo from '@/views/utils/enterprise-info'
import MembersManage from '@/views/organization/members-manage'
import AllMembers from '@/views/organization/all-members'
import EquipmentMonitoring from '@/views/organization/equipment-monitoring'
Vue.use(Router)

export default new Router({
  routes: [{
      path: '/',
      name: 'business-verify',
      component: BusinessVerify
    },
    {
      path: '/organization-home',
      name: 'organization-home',
      component: OrganizationHome
    }, {
      path: '/member-home',
      name: 'member-home',
      component: MemberHome
    }, {
      path: '/organization-verify',
      name: 'organization-verify',
      component: OrganizationVerify
    }, {
      path: '/member-verify',
      name: 'member-verify',
      component: MemberVerify
    }, {
      path: '/enterprise-info',
      name: 'enterprise-info',
      component: EnterpriseInfo
    }, {
      path: '/members-manage',
      name: 'members-manage',
      component: MembersManage
    }, {
      path: '/all-members',
      name: 'all-members',
      component: AllMembers
    }, {
      path: '/equipment-monitoring',
      name: 'equipment-monitoring',
      component: EquipmentMonitoring
    }
  ]
})