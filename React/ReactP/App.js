import React from "react";
import ReactDOM from "react-dom/client";

const RestoCard = ({restData}) => {
  const {info} = restData
  return(
    <div className="card-container">
      <div className = "image"> 
        <img src = {"https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto/" + info.cloudinaryImageId} width={200} height={150}></img>
      </div>
      <div className="card">
        <h2>{info.name}</h2>
        <h5>{info.avgRating} .{info.sla.slaString}</h5>
        <h6>{info.costForTwo}</h6>
        <p>{info.cuisines.join(",")}</p>
      </div>
    </div>
  )
};
const resobj = [{
        "card": {
          "card": {
            "@type": "type.googleapis.com/swiggy.presentation.food.v2.Restaurant",
            "info": {
              "id": "102334",
              "name": "Dindigul Thalappakatti - Since 1957\n",
              "cloudinaryImageId": "RX_THUMBNAIL/IMAGES/VENDOR/2025/9/21/39e9a28b-be1a-4764-8cfe-bb69e61448f4_102334.JPG",
              "locality": "Mg Road",
              "areaName": "Indiranagar",
              "costForTwo": "₹650 for two",
              "cuisines": [
                "Biryani",
                "Barbecue",
                "South Indian",
                "Chinese",
                "North Indian"
              ],
              "avgRating": 4.4,
              "parentId": "641506",
              "avgRatingString": "4.4",
              "totalRatingsString": "10K+",
              "promoted": true,
              "adTrackingId": "cid=482ad629-f547-4f00-9739-fdfa6a8ea8b9~p=0~adgrpid=482ad629-f547-4f00-9739-fdfa6a8ea8b9#ag1~mp=SWIGGY_IN~bl=FOOD~aet=RESTAURANT~aeid=102334~plpr=COLLECTION~eid=087b9013-37c9-4d86-8c3d-b3e9f33ef80c~srvts=1766469538086~collid=80424",
              "sla": {
                "deliveryTime": 36,
                "lastMileTravel": 3.7,
                "serviceability": "SERVICEABLE",
                "slaString": "35-40 mins",
                "lastMileTravelString": "3.7 km",
                "iconType": "ICON_TYPE_EMPTY"
              },
              "availability": {
                "nextCloseTime": "2025-12-23 23:59:00",
                "opened": true
              },
              "badges": {

              },
              "isOpen": true,
              "type": "F",
              "badgesV2": {
                "entityBadges": {
                  "textBased": {

                  },
                  "imageBased": {

                  },
                  "textExtendedBadges": {

                  }
                }
              },
              "aggregatedDiscountInfoV3": {
                "header": "ITEMS",
                "subHeader": "AT ₹39",
                "logoCtx": {
                  "text": "BENEFITS"
                }
              },
              "orderabilityCommunication": {
                "title": {

                },
                "subTitle": {

                },
                "message": {

                },
                "customIcon": {

                },
                "commsStyling": {

                }
              },
              "differentiatedUi": {
                "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                "differentiatedUiMediaDetails": {
                  "mediaType": "ADS_MEDIA_ENUM_IMAGE",
                  "lottie": {

                  },
                  "video": {

                  }
                }
              },
              "reviewsSummary": {

              },
              "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
              "restaurantOfferPresentationInfo": {

              },
              "externalRatings": {
                "aggregatedRating": {
                  "rating": "--"
                }
              },
              "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
              "campaignId": "482ad629-f547-4f00-9739-fdfa6a8ea8b9"
            },
            "analytics": {

            },
            "cta": {
              "link": "swiggy://menu?restaurant_id=102334&source=collection&query=Dosa",
              "text": "RESTAURANT_MENU",
              "type": "DEEPLINK"
            },
            "widgetId": "collectionV5RestaurantListWidget_SimRestoRelevance_food"
          },
          "relevance": {
            "type": "RELEVANCE_TYPE_ON_MENU_RETURN",
            "sectionId": "MENU_RETURN_FOOD"
          }
        }
      },
      {
        "card": {
          "card": {
            "@type": "type.googleapis.com/swiggy.presentation.food.v2.Restaurant",
            "info": {
              "id": "639122",
              "name": "Namaste",
              "cloudinaryImageId": "hprrkr2aghvcmk6ikjlk",
              "locality": "Sampige Road",
              "areaName": "Malleshwaram",
              "costForTwo": "₹100 for two",
              "cuisines": [
                "South Indian",
                "Chinese",
                "Thalis"
              ],
              "avgRating": 4.4,
              "veg": true,
              "parentId": "366271",
              "avgRatingString": "4.4",
              "totalRatingsString": "7.2K+",
              "sla": {
                "deliveryTime": 36,
                "lastMileTravel": 5,
                "serviceability": "SERVICEABLE",
                "slaString": "35-45 mins",
                "lastMileTravelString": "5.0 km",
                "iconType": "ICON_TYPE_EMPTY"
              },
              "availability": {
                "nextCloseTime": "2025-12-23 23:00:00",
                "opened": true
              },
              "badges": {
                "imageBadges": [
                  {
                    "imageId": "Rxawards/_CATEGORY-South%20Indian.png",
                    "description": "Delivery!"
                  }
                ]
              },
              "isOpen": true,
              "type": "F",
              "badgesV2": {
                "entityBadges": {
                  "textBased": {

                  },
                  "imageBased": {
                    "badgeObject": [
                      {
                        "attributes": {
                          "description": "Delivery!",
                          "imageId": "Rxawards/_CATEGORY-South%20Indian.png"
                        }
                      }
                    ]
                  },
                  "textExtendedBadges": {

                  }
                }
              },
              "aggregatedDiscountInfoV3": {
                "header": "₹200 OFF",
                "subHeader": "ABOVE ₹499",
                "discountTag": "FLAT DEAL",
                "logoCtx": {
                  "text": "BENEFITS"
                }
              },
              "orderabilityCommunication": {
                "title": {

                },
                "subTitle": {

                },
                "message": {

                },
                "customIcon": {

                },
                "commsStyling": {

                }
              },
              "differentiatedUi": {
                "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                "differentiatedUiMediaDetails": {
                  "mediaType": "ADS_MEDIA_ENUM_IMAGE",
                  "lottie": {

                  },
                  "video": {

                  }
                }
              },
              "reviewsSummary": {

              },
              "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
              "restaurantOfferPresentationInfo": {

              },
              "externalRatings": {
                "aggregatedRating": {
                  "rating": "--"
                }
              },
              "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
            },
            "analytics": {

            },
            "cta": {
              "link": "swiggy://menu?restaurant_id=639122&source=collection&query=Dosa",
              "text": "RESTAURANT_MENU",
              "type": "DEEPLINK"
            },
            "widgetId": "collectionV5RestaurantListWidget_SimRestoRelevance_food"
          },
          "relevance": {
            "type": "RELEVANCE_TYPE_ON_MENU_RETURN",
            "sectionId": "MENU_RETURN_FOOD"
          }
        }
      },
      {
        "card": {
          "card": {
            "@type": "type.googleapis.com/swiggy.presentation.food.v2.Restaurant",
            "info": {
              "id": "944778",
              "name": "Dindigul Ponram Biriyani",
              "cloudinaryImageId": "FOOD_CATALOG/IMAGES/CMS/2025/7/25/5fd773a4-4ba7-482e-8192-c693a9141a7e_74f42874-1403-4528-b89d-bc64b90ef6f8.jpg",
              "locality": "Koramangala",
              "areaName": "Koramangala",
              "costForTwo": "₹1500 for two",
              "cuisines": [
                "South Indian",
                "briyani"
              ],
              "avgRating": 4.1,
              "parentId": "553782",
              "avgRatingString": "4.1",
              "totalRatingsString": "855",
              "promoted": true,
              "adTrackingId": "cid=d9f61261-d4fc-4dfb-acb7-0acfd74b08d3~p=3~adgrpid=d9f61261-d4fc-4dfb-acb7-0acfd74b08d3#ag1~mp=SWIGGY_IN~bl=FOOD~aet=RESTAURANT~aeid=944778~plpr=COLLECTION~eid=4eb99e31-2cc5-4fb9-a619-c85f62b69173~srvts=1766469538086~collid=80424",
              "sla": {
                "deliveryTime": 52,
                "lastMileTravel": 7.4,
                "serviceability": "SERVICEABLE",
                "slaString": "50-60 mins",
                "lastMileTravelString": "7.4 km",
                "iconType": "ICON_TYPE_EMPTY"
              },
              "availability": {
                "nextCloseTime": "2025-12-23 23:00:00",
                "opened": true
              },
              "badges": {

              },
              "isOpen": true,
              "type": "F",
              "badgesV2": {
                "entityBadges": {
                  "textBased": {

                  },
                  "imageBased": {

                  },
                  "textExtendedBadges": {

                  }
                }
              },
              "aggregatedDiscountInfoV3": {
                "header": "ITEMS",
                "subHeader": "AT ₹199",
                "logoCtx": {
                  "text": "BENEFITS"
                }
              },
              "orderabilityCommunication": {
                "title": {

                },
                "subTitle": {

                },
                "message": {

                },
                "customIcon": {

                },
                "commsStyling": {

                }
              },
              "differentiatedUi": {
                "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                "differentiatedUiMediaDetails": {
                  "mediaType": "ADS_MEDIA_ENUM_IMAGE",
                  "lottie": {

                  },
                  "video": {

                  }
                }
              },
              "reviewsSummary": {

              },
              "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
              "restaurantOfferPresentationInfo": {

              },
              "externalRatings": {
                "aggregatedRating": {
                  "rating": "4.5",
                  "ratingCount": "2.5K+"
                },
                "source": "GOOGLE",
                "sourceIconImageId": "v1704440323/google_ratings/rating_google_tag"
              },
              "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
              "campaignId": "d9f61261-d4fc-4dfb-acb7-0acfd74b08d3"
            },
            "analytics": {

            },
            "cta": {
              "link": "swiggy://menu?restaurant_id=944778&source=collection&query=Dosa",
              "text": "RESTAURANT_MENU",
              "type": "DEEPLINK"
            },
            "widgetId": "collectionV5RestaurantListWidget_SimRestoRelevance_food"
          },
          "relevance": {
            "type": "RELEVANCE_TYPE_ON_MENU_RETURN",
            "sectionId": "MENU_RETURN_FOOD"
          }
        }
      },
      {
        "card": {
          "card": {
            "@type": "type.googleapis.com/swiggy.presentation.food.v2.Restaurant",
            "info": {
              "id": "471009",
              "name": "Virinchi Cafe",
              "cloudinaryImageId": "FOOD_CATALOG/IMAGES/CMS/2025/2/25/1b1dbecd-05f7-417b-baf7-53edbe2c680a_5cc6f0c5-b68d-44c1-901a-c0acfbbc39da.jpeg",
              "locality": "Residency Road",
              "areaName": "Ashok Nagar",
              "costForTwo": "₹250 for two",
              "cuisines": [
                "South Indian",
                "Fast Food",
                "fastfood"
              ],
              "avgRating": 4.6,
              "veg": true,
              "parentId": "282713",
              "avgRatingString": "4.6",
              "totalRatingsString": "2.2K+",
              "sla": {
                "deliveryTime": 24,
                "lastMileTravel": 2.4,
                "serviceability": "SERVICEABLE",
                "slaString": "20-25 mins",
                "lastMileTravelString": "2.4 km",
                "iconType": "ICON_TYPE_EMPTY"
              },
              "availability": {
                "nextCloseTime": "2025-12-23 23:59:00",
                "opened": true
              },
              "badges": {

              },
              "isOpen": true,
              "type": "F",
              "badgesV2": {
                "entityBadges": {
                  "textExtendedBadges": {

                  },
                  "textBased": {

                  },
                  "imageBased": {

                  }
                }
              },
              "aggregatedDiscountInfoV3": {
                "header": "₹200 OFF",
                "subHeader": "ABOVE ₹799",
                "discountTag": "FLAT DEAL",
                "logoCtx": {
                  "text": "BENEFITS"
                }
              },
              "orderabilityCommunication": {
                "title": {

                },
                "subTitle": {

                },
                "message": {

                },
                "customIcon": {

                },
                "commsStyling": {

                }
              },
              "differentiatedUi": {
                "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                "differentiatedUiMediaDetails": {
                  "mediaType": "ADS_MEDIA_ENUM_IMAGE",
                  "lottie": {

                  },
                  "video": {

                  }
                }
              },
              "reviewsSummary": {

              },
              "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
              "restaurantOfferPresentationInfo": {

              },
              "externalRatings": {
                "aggregatedRating": {
                  "rating": "--"
                }
              },
              "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
            },
            "analytics": {

            },
            "cta": {
              "link": "swiggy://menu?restaurant_id=471009&source=collection&query=Dosa",
              "text": "RESTAURANT_MENU",
              "type": "DEEPLINK"
            },
            "widgetId": "collectionV5RestaurantListWidget_SimRestoRelevance_food"
          },
          "relevance": {
            "type": "RELEVANCE_TYPE_ON_MENU_RETURN",
            "sectionId": "MENU_RETURN_FOOD"
          }
        }
      }]
      

const Body = () => {
  return(
    <div>
      <div className="search">
        <input type ="text"></input>
        <button type ="search">Submit</button>
      </div>
      <div className="restcard">
        {resobj.map((rest) =>
        (<RestoCard 
          key={rest.card.card.info.id}
          restData={rest.card.card}>
        </RestoCard>))}
      </div>
    </div>
  )
};

const Header = () => {
  return(
    <div className="heading">
      <img src = "https://img.freepik.com/premium-vector/food-delivery-online-concept-vector_1162942-1594.jpg?semt=ais_hybrid&w=740&q=80" alt ="trill" width={80}></img>
      <div className="inner-heading"> 
        <ul>
          <li>Home</li>
          <li>Contact</li>
          <li>About</li>
        </ul>
      </div>
    </div>
  )
};

const Applayout = () =>{
  return(
    <div>
      <Header />
      <Body />
    </div>  
  )
};

const root =ReactDOM.createRoot(document.getElementById("root"));
root.render(<Applayout />);