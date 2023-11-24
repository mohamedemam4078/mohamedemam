import geocoder
import folium

ip = input("Enter ip Address :")

g = geocoder.ip(ip)

myAddress = g.latlng
print(myAddress)

my_map1 = folium.Map(location=myAddress,
                     zoom_start=12)


folium.CircleMarker(location=myAddress,
                    radius=50, popup="Yorkshire").add_to(my_map1)

folium.Marker(myAddress,
              popup="Yorkshire").add_to(my_map1)

input("Press Enter to close the popup......")
