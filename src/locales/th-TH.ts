import { BaseLang } from './base'

const thTH: BaseLang = {
  save: 'บันทึก',
  confirm: 'ยืนยัน',
  cancel: 'ยกเลิก',
  done: 'เสร็จสิ้น',
  noData: 'ไม่มีข้อมูล',
  placeholder: 'กรุณากรอกข้อมูล',
  select: 'กรุณาเลือก',
  video: {
    errorTip: 'โหลดวิดีโอไม่สำเร็จ',
    clickRetry: 'คลิกเพื่อลองใหม่อีกครั้ง',
  },
  fixednav: {
    activeText: 'ซ่อนเมนู',
    unActiveText: 'เมนูทางลัด',
  },
  infiniteloading: {
    pullRefreshText: '',
    loadText: '',
    loadMoreText: '',
  },
  pagination: {
    prev: 'ก่อนหน้า',
    next: 'ถัดไป',
  },
  range: {
    rangeText: '',
  },
  calendaritem: {
    weekdays: ['อา.', 'จ.', 'อ.', 'พ.', 'พฤ.', 'ศ.', 'ส.'],
    end: 'สิ้นสุด',
    start: 'เริ่มต้น',
    title: 'เลือกวันที่',
    monthTitle: (year: number, month: number) => `เดือน ${month} ปี ${year}`,
    today: 'วันนี้',
    loadPreviousMonth: '',
    noEarlierMonth: '',
  },
  shortpassword: {
    title: 'กรุณาพิมพ์รหัสผ่าน',
    desc: 'กรุณายืนยันตัวตนเพื่อความปลอดภัยในการใช้งาน',
    tips: 'ลืมรหัสผ่าน',
  },
  uploader: {
    ready: 'เสร็จสิ้นการเตรียมพร้อม',
    readyUpload: 'เตรียมอัปโหลด',
    waitingUpload: 'รออัปโหลด',
    uploading: 'กำลังอัปโหลด',
    success: 'อัปโหลดเสร็จสิ้น',
    error: 'อัปโหลดไม่สำเร็จ',
  },
  countdown: {
    day: 'วัน',
    hour: 'ชั่วโมง',
    minute: 'นาที',
    second: 'วินาที',
  },
  address: {
    selectRegion: 'กรุณาเลือกพื้นที่',
    deliveryTo: 'จัดส่งไปยัง',
    chooseAnotherAddress: 'เลือกที่อยู่อื่น',
  },
  signature: {
    reSign: 'ลงชื่อใหม่อีกครั้ง',
    unSupportTpl: 'ขออภัย เบราว์เซอร์นี้ไม่รองรับฟังก์ชัน Canvas',
  },
  ecard: {
    chooseText: 'กรุณาเลือกมูลค่าหน้าอีการ์ด',
    otherValueText: 'จำนวนมูลค่าอื่น ๆ',
    placeholder: 'กรุณาใส่เลขจำนวนเต็มระหว่าง 1-5000',
  },
  timeselect: {
    pickupTime: 'เวลาที่รับพัสดุ',
  },
  sku: {
    buyNow: 'ซื้อเดี๋ยวนี้',
    buyNumber: 'จำนวนที่สั่งซื้อ',
    addToCard: 'เพิ่มใส่รถเข็น',
  },
  skuheader: {
    skuId: 'รหัสสินค้า',
  },
  addresslist: {
    addAddress: 'เพิ่มที่อยู่',
  },
  comment: {
    complaintsText: '',
    additionalReview: (day: number) => `${day}`,
    additionalImages: (length: number) => `${length}`,
  },
}
export default thTH
