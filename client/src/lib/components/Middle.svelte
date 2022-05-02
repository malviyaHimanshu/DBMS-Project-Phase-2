<script>
    let description = "";
    const handleSubmit = async (e) => {
      e.preventDefault();
      // try {
      //   await fetch("http://localhost:8080/", {
      //     method: "POST",
      //     headers: {
      //       "Content-Type": "application/json",
      //     },
      //   })
      // } catch(err) {
      //   console.log(err.message);
      // }
      description = "Keshav is also going to the same destination!";
    }
</script>

<div
  class="centerPane h-screen w-full flex flex-col justify-start bg-white overflow-y-scroll align-middle py-5 gap-6 px-10"
>
  <div
    class="search-bar relative w-full text-gray-400 focus-within:text-gray-400 h-10"
  >
    <span class="absolute top-[0.3rem] left-2 flex items-center pl-2">
      <button type="submit" class="focus:shadow-outline p-1 focus:outline-none">
        <svg
          class="h-5 w-5"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
          />
        </svg>
      </button>
    </span>
    <input
      type="text"
      name="q"
      class="w-full rounded-xl bg-transparent py-2 pl-10 text-sm text-white focus:bg-blue-200 focus:text-black focus:outline-none border-2 border-gray-300"
      placeholder="Search by products..."
      autoComplete="off"
    />
  </div>
  <div class="bg-blue-500 rounded-xl p-6 flex flex-col items-start">
    <h1 class="text-white font-bold my-3 text-4xl">Welcome Himanshu👋🏻</h1>
    <p class="text-base leading-5 pb-5 text-white font-normal">
      {description}
    </p>
    <button
      class="text-lg rounded-xl text-[#4062ff] px-10 py-3 bg-white p-2 font-bold shadow-md hover:shadow-2xl"
      >Plan a trip</button
    >
  </div>
  <div>
    <form on:submit={handleSubmit} method="post">
      <h1 class="font-bold text-xl">Details</h1>
      <div>
        <h1 class="text-gray-500 mt-5">Personal Details</h1>
        <div class="flex flex-row gap-6 mt-2 w-full">
          <input
            class="rounded-md py-2 px-3 w-full bg-gray-100 border-2 border-gray-300"
            type="text"
            name="name"
            placeholder="Name"
          />
          <input
            class="rounded-md py-2 px-3 w-full bg-gray-100 border-2 border-gray-300"
            type="text"
            name="gender"
            placeholder="Gender"
          />
        </div>
        <div class="flex flex-row gap-6 mt-2 w-full">
          <input
            class="rounded-md py-2 px-3 w-full bg-gray-100 border-2 border-gray-300"
            type="text"
            name="mode_of_transport"
            placeholder="Mode of Transport"
          />
          <input
            class="rounded-md py-2 px-3 w-full bg-gray-100 border-2 border-gray-300"
            type="number"
            name="age"
            placeholder="Age"
          />
        </div>
      </div>
      <div>
        <h1 class="text-gray-500 mt-5">Travel Details</h1>
        <div class="flex flex-row gap-6 mt-2 w-full items-center">
          <input
            class="rounded-md py-2 px-3 w-full bg-gray-100 border-2 border-gray-300"
            type="text"
            name="from_place"
            placeholder="From place"
          />
          <svg
            class="w-10 h-10"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
            ><path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M17 8l4 4m0 0l-4 4m4-4H3"
            /></svg
          >
          <input
            class="rounded-md py-2 px-3 w-full bg-gray-100 border-2 border-gray-300"
            type="text"
            name="to_place"
            placeholder="To place"
          />
        </div>
        <div class="flex flex-row gap-6 mt-2 w-full items-center">
          <input
            class="rounded-md py-2 px-3 w-full bg-gray-100 border-2 border-gray-300"
            type="datetime"
            name="date_start"
            placeholder="Date start"
          />
          <svg
            class="w-10 h-10"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
            ><path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M17 8l4 4m0 0l-4 4m4-4H3"
            /></svg
          >
          <input
            class="rounded-md py-2 px-3 w-full bg-gray-100 border-2 border-gray-300"
            type="datetime"
            name="date_end"
            placeholder="Date end"
          />
        </div>
        <div class="flex w-full justify-start mt-5">
          <button
            type="reset"
            class="text-white font-semibold bg-[#4062ff] w-1/2 mr-2  py-3 rounded-xl box-border"
            >Reset</button
          >
          <button on:submit={handleSubmit}
            type="submit"
            class="text-white bg-[#4062ff] font-semibold w-1/2 ml-2  py-3 rounded-xl box-border"
            >Submit</button
          >
        </div>
      </div>
    </form>
  </div>
</div>

<style>
  .centerPane {
    width: 70vw;
  }

  /* .popup {
    width: 100%;
    background-color: #4062ff;
    border-radius: 10px;
    height: 2rem;
    color: white;
  } */

  .text-base {
    font-size: 20px;
    color: rgb(255, 255, 255);
  }


</style>
