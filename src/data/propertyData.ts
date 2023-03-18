import p1 from '../assets/property/p1.jpg'
import p2 from '../assets/property/p2.jpg'
import p3 from '../assets/property/p3.jpg'
import p4 from '../assets/property/p4.jpg'

interface dataProps {
    title: string,
    location: string,
    price: number
    description: string,
    image: any
}

export const propertyData: Array<dataProps> = [
    {
        title: "Luxury Duplex Apartment",
        location: "California, CA",
        price: 400000,
        description: "Accumsan. Iaculis senectus senectus sed dictumst imperdiet at gravida porta ultrices hendrerit ante laoreet enim sapien auctor vestibulum. Sed rhoncus hac senectus vitae aliquet curae; eget viverra dignissim ad consectetuer. Nonummy justo dapibus sem et volutpat urna porta nec. Duis odio lacinia laoreet volutpat. Vel consectetuer leo. Per ridiculus litora curae;. Arcu class leo mauris nostra conubia netus habitasse, dignissim eleifend bland tortor Parturient, hymenaeos varius eu maecenas maecenas eu. Praesent parturient. Dapibus facilisi pretium magna nunc neque proin augue arcu Pede quisque semper sit tempor, sollicitudin. Aenean proin, nullam euismod amet sed inceptos. Viverra rutrum proin aliquam fermentum.",
        image: p1
    },
    {
        title: "3 Bedroom Luxury Home",
        location: "Los Angeles, LA",
        price: 120000,
        description: "Accumsan. Iaculis senectus senectus sed dictumst imperdiet at gravida porta ultrices hendrerit ante laoreet enim sapien auctor vestibulum. Sed rhoncus hac senectus vitae aliquet curae; eget viverra dignissim ad consectetuer. Nonummy justo dapibus sem et volutpat urna porta nec. Duis odio lacinia laoreet volutpat. Vel consectetuer leo. Per ridiculus litora curae;. Arcu class leo mauris nostra conubia netus habitasse, dignissim eleifend bland tortor Parturient, hymenaeos varius eu maecenas maecenas eu. Praesent parturient. Dapibus facilisi pretium magna nunc neque proin augue arcu Pede quisque semper sit tempor, sollicitudin. Aenean proin, nullam euismod amet sed inceptos. Viverra rutrum proin aliquam fermentum.",
        image: p2
    },
    {
        title: "Furnished Multiple Apartment",
        location: "California, CA",
        price: 500000,
        description: "Accumsan. Iaculis senectus senectus sed dictumst imperdiet at gravida porta ultrices hendrerit ante laoreet enim sapien auctor vestibulum. Sed rhoncus hac senectus vitae aliquet curae; eget viverra dignissim ad consectetuer. Nonummy justo dapibus sem et volutpat urna porta nec. Duis odio lacinia laoreet volutpat. Vel consectetuer leo. Per ridiculus litora curae;. Arcu class leo mauris nostra conubia netus habitasse, dignissim eleifend bland tortor Parturient, hymenaeos varius eu maecenas maecenas eu. Praesent parturient. Dapibus facilisi pretium magna nunc neque proin augue arcu Pede quisque semper sit tempor, sollicitudin. Aenean proin, nullam euismod amet sed inceptos. Viverra rutrum proin aliquam fermentum.",
        image: p3
    }
]