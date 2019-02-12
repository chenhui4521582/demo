import Home from '@/views/Home'
import veeToast from '@/views/veeToast'
import veeModal from '@/views/veeModal'
import veeSwitch from '@/views/veeSwitch'
import veeSlide from '@/views/veeSlide'
import veeScrollSlide from '@/views/veeScrollSlide'
import veeUploader from '@/views/veeUploader'
const routes = [
  {
    path: '/',
    name: 'home',
    component: Home
  },
  {
    path: '/view-toast',
    name: 'view-vee-toast',
    component: veeToast
  },
  {
    path: '/view-modal',
    name: 'view-vee-modal',
    component: veeModal
  },
  {
    path: '/view-switch',
    name: 'view-vee-switch',
    component: veeSwitch
  },
  {
    path: '/view-slide',
    name: 'view-vee-slide',
    component: veeSlide
  },
  {
    path: '/view-scroll-slide',
    name: 'view-vee-scroll-slide',
    component: veeScrollSlide
  },
  {
    path: '/view-uploader',
    name: 'view-uploader',
    component: veeUploader
  }
]
export default routes
