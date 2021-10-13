const nums = [1,2,3,4,5,6,7,8]

document.querySelector('#arr_num').innerText = nums.join(', ')
document.querySelector('#bt_run').addEventListener('click', function() {
  document.querySelector('#txt_num').innerText = nums[Math.floor(Math.random() * 8)]
})