import { homePage } from "./schemas/home";
import { roomsPage } from "./schemas/rooms";
import { amenitiesPage } from "./schemas/amenities";
import { pricingPage } from "./schemas/pricing";
import { contactPage } from "./schemas/contact";

export const schema = {
  types: [homePage, roomsPage, amenitiesPage, pricingPage, contactPage],
};
