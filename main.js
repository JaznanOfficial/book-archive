const searchBook = () => {
    const searchField = document.getElementById('search-field');
    const searchText = searchField.value;

    searchField.value = ''

    if (searchText === '') {
    alert('Please Write some text')
    }
    else {
        const url = `https://openlibrary.org/search.json?q=${searchText}`
        fetch(url)
            .then(response => response.json())
            .then(data => displaySearchResult(data.docs))
    }
}



const displaySearchResult = docs => {


    if (docs.length === 0) {
        alert('No result found. please write valid text or try again later')
    }

        



    const searchResult = document.getElementById('search-result');
    docs.forEach(doc => {


        
        
    
        const div = document.createElement('div');
        div.classList.add('col');
        div.innerHTML = `
        <div class="card h-100 text-center">
            <div class="h-75">
            <img src="https://covers.openlibrary.org/b/id/${doc.cover_i}-M.jpg" class="card-img-top h-100" alt="This Picture Is not in api" />
            </div
            <div class="card-body">
                <h4 class="card-title">${doc.title}</h4>
                <h6>Author: ${doc.author_name}</h6>
                <p><b>Published Date: ${doc.publish_date[0]}</b></p>
                <p><b>Publisher: ${doc.publisher[0]}</b></p>
            </div>
        </div>
        `;
        searchResult.appendChild(div);
        // const totalFound = document.getElementById('total-found').innerText = div.length ;
        // console.log(totalFound);
    });
}