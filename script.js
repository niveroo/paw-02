(function () {
  const example = document.getElementById('example')
  const cw1 = document.getElementById('cw1')
  const cw2 = document.getElementById('cw2')
  const cw3 = document.getElementById('cw3')
  const answer = document.getElementById('answer')

  example.addEventListener("click", function () {
    fetch('https://jsonplaceholder.typicode.com/posts')
      .then(response => response.json())
      .then(array => {
        console.log(array)
        answer.innerHTML = JSON.stringify(array);
      })
  })

  cw1.addEventListener("click", function () {
    
    //////  1-2  //////
    // answer.innerHTML = "<p>Loading...</p>";

    // fetch('https://jsonplaceholder.typicode.com/posts')
    //   .then(response => response.json())
    //   .then(array => {
      
    //   let postList = '<ul>';
      
    //   array.forEach(post => {
    //     postList += `
    //       <li>
    //         <h3>${post.title}</h3>  <!-- Tytuł postu -->
    //         <p>${post.body}</p>     <!-- Treść postu -->
    //       </li>
    //     `;
    //   });

    //   postList += '</ul>';

    //   answer.innerHTML = postList;
    //   })

    //////  3  //////
    // answer.innerHTML = "<p>Loading...</p>";

    // fetch('https://jsonplaceholder.typicode.com/posts/1')
    //   .then(response => response.json())
    //   .then(post => {
    //     let postContent = `
    //       <h3>${post.title}</h3>  <!-- Tytuł postu -->
    //       <p>${post.body}</p>     <!-- Treść postu -->
    //     `;

    //     answer.innerHTML = postContent;
    //   }) 

    //////   4   //////
    answer.innerHTML = "<p>Processing...</p>";

    const newPost = {
      title: 'Nowy post',
      body: 'Treść nowego postu',
      userId: 1
    };

    fetch('https://jsonplaceholder.typicode.com/posts', {
      method: 'POST', 
      headers: {
        'Content-type': 'application/json; charset=UTF-8', 
      },
      body: JSON.stringify(newPost)
    })
    .then(response => response.json())
    .then(data => {
      answer.innerHTML = `<p>Dodano nowy post o ID = ${data.id}</p>`;
    })
  })

  cw2.addEventListener("click", function () {
    const dialog = document.getElementById('modal')
    dialog.showModal();

    fetch('https://jsonplaceholder.typicode.com/posts/1')
      .finally(()=>dialog.close())
      .then(response => response.json())
      .then(post => {
        let postContent = `
          <h3>${post.title}</h3>  <!-- Tytuł postu -->
          <p>${post.body}</p>     <!-- Treść postu -->
        `;
        console.log(post)
        answer.innerHTML = postContent;
      }) 
  })

  cw3.addEventListener("click", function () {
    //////   1   //////
    // const dialog = document.getElementById('modal')
    // dialog.showModal();

    // fetch('https://my-json-server.typicode.com/niveroo/paw-02/posts/1')
    //   .finally(()=>dialog.close())
    //   .then(response => response.json())
    //   .then(post => {
    //     let postContent = `
    //       <h3>${post.title}</h3>  <!-- Tytuł postu -->
    //       <p>${post.body}</p>     <!-- Treść postu -->
    //     `;
    //     console.log(post)
    //     answer.innerHTML = postContent;
    //   }) 

    //////   2   //////
    const dialog = document.getElementById('modal')
    dialog.showModal();

    fetch('https://my-json-server.typicode.com/niveroo/paw-02/posts')
    .finally(()=>dialog.close())
    .then(response => response.json())
    .then(array => {
      
      let postList = '<ul>';
      
      array.forEach(post => {
        postList += `
          <li>
            <h3>${post.title}</h3>  <!-- Tytuł postu -->
            <p>${post.body}</p>     <!-- Treść postu -->
          </li>
        `;
    });
    postList += '</ul>';
    answer.innerHTML = postList; 
    })

  })

})();
