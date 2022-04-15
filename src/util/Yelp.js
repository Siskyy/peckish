const apiKey = "orJDnPMg5LVIwqKHsyr5-mj0BNyDInJX_HIC6unP9MdNODkJrrxeDl2b3wYtLNkkgyNZ599Vk1tcLNAEJs3hJaRcxExIMl7vdXNVzFD_8lmUEXCADKD_F33ekURZYnYx";

const Yelp = {
    searchYelp(term, location, sortBy) {
        return {
            fetch(`https://cors-anywhere.herokuapp.com/https://api.yelp.com/v3/businesses/search?${term}=TERM&location=${location}&sort_by=${sortBy}`, {
                headers: {
                    Athorization: `Bearer ${apiKey}`
                }
            }).then(response => {
                return response.json();
            }).then(jsonResponse => {
                if (jsonResponse.businesses) {
                    return jsonResponse.businesses.map(business => {
                        id: '',
                        imageSrc: '',
                        name: '',
                        address: '',
                        city: '',
                        state: '',
                        zipCode: '',
                        category: '',
                        rating: '',
                        reviewCount: ''
                    });
                }
            });
        };
    };
};
