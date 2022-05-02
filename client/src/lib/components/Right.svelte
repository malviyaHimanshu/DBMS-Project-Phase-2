<script>
</script>

<div
  class="right--pane w-full h-full bg-white flex flex-col justify-start align-middle"
>
  <div class="profile flex h-[80px] w-full justify-start align-middle ">
    <img
      src="./person.png"
      alt="profile"
      class="profile-photo h-[45px] ml-8 my-3  rounded-[50%]"
    />
    <div class="wrapper-login">
      <h2 class="mt-4 px-2 text-lg font-bold">Himanshu Malviya</h2>
      <p class="text-sm text-base px-3 text-gray-600 font-semibold">Student</p>
    </div>
  </div>

  <div class="infoBanner h-[150px] bg-[#4062ff] m-3 box-border rounded-2xl" />
</div>

<style>
  .right--pane {
    width: 27vw;
  }
  img.profile-photo {
    border: 5px solid blue;
    @apply box-content;
  }

  div.profile-photo {
      background: url("/bg.svg");
    background-position: left top;
    background-repeat: no-repeat;
    background-size: cover;
  }
</style>
