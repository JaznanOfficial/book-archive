const searchBook = () => {
    const searchField = document.getElementById('search-field');
    const searchText = searchField.value;

    // searchField.value = '';

    const url = `https://openlibrary.org/search.json?q=${searchText}`
    fetch(url)
        .then(response => response.json())
        .then(data => displaySearchResult(data.docs))
}

const displaySearchResult = docs => {
    const searchResult = document.getElementById('search-result');
    docs.forEach(doc => {
        console.log(doc);
        const div = document.createElement('div');
        div.classList.add('col');
        div.innerHTML = `
        <div class="card h-100">
            <img src="..." class="card-img-top" alt="..." />
            <div class="card-body">
                <h4 class="card-title">${doc.title}</h4>
                <h6>Author: ${doc.author_name}</h6>
                <p><b>Published Date: ${doc.publish_date[0]}</b></p>
            </div>
        </div>
        `;
        searchResult.appendChild(div);
    });
}