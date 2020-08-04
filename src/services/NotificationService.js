import swal from "sweetalert2"
export default class NotificationService {

  static async confirmAction(title = "Are you sure?") {
    try {
      let res = await swal.fire({
        title: title,
        text: "You won't be able to revert this!",
        icon: 'warning',
        showCancelButton: true,
        confirmButtonText: 'Yes, delete it!',
        cancelButtonText: 'No, cancel!',
      })
      if (res.value) {
        return true
      } return false
    } catch (error) {
      console.error(error)
    }
  }

  static toast(title = "Toasty") {
    // @ts-ignore
    swal.fire({
      title: title,
      type: "success",
      icon: "success",
      timer: 5000,
      toast: true,
      position: "top-right",
      showConfirmButton: false,
      timerProgressBar: true
    })
  }
}