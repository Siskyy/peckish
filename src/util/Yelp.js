const apiKey = "orJDnPMg5LVIwqKHsyr5-mj0BNyDInJX_HIC6unP9MdNODkJrrxeDl2b3wYtLNkkgyNZ599Vk1tcLNAEJs3hJaRcxExIMl7vdXNVzFD_8lmUEXCADKD_F33ekURZYnYx";

const yelp = {
    searchYelp(term, location, sortBy) {
        return {
            fetch(`https://cors-anywhere.herokuapp.com/https://api.yelp.com/v3/businesses/search?term=${term}&location=${location}&sort_by=${sortBy}`, {
                headers: {
                    Athorization: `Bearer ${apiKey}`
                }
            }).then(response => {
                return response.json();
            }).then(jsonResponse => {
                if (jsonResponse.businesses) {
                    return jsonResponse.businesses.map(business => {
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
                    });
                }
            });
        };
    };
};

export default yelp;
