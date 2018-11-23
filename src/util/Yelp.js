const apiKey = "svEy_CqL9tvT_H4KbRA0hgNdtx4RFY3mxf8YbXvjVlqPDLTt-FJjAjMziOXkFWWjFk1jPn3wj1xOmmj6EYx5Gh0eGdzeemuacwgDBEfhcHKui30hW282r_WjLF73W3Yx"

const Yelp = {

}

const search = (term, location, sortBy) => {
    return 
    fetch(`https://cors-anywhere.herokuapp.com/https://api.yelp.com/v3/businesses/search?term=${term}&location=${location}&sort_by=${sortBy}`, 
        { 
            headers: {Authorization: `Bearer ${apiKey}`}
        })
        .then(response => {
            return response.json()
        })
        .then(jsonResponse => {
            if (jsonResponse.Businesses) {
                json.Businesses.map(business => {
                    console.log(business);
                    return {
                    id: business.id,
                    imageSrc: business.image_url,
                    name: business.name,
                    address: business.location.address1,
                    city: business.location.city,
                    state: business.location.state,
                    zipCode: business.location.zip_code,
                    category: business.categories[0].title,
                    rating: business.rating,
                    reviewCount: business.review_count
                    }
                })
            }
        })
    }

    export default Yelp;