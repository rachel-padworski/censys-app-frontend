// ajax request to fetch data from locations
// export const fetchLocation = async (ip) => {
//         try {
//             const res = await fetch(`http://localhost:3000/get_location/?ip_address=${ip}`)
//             const data = await res.json()
//             console.log(data, "data")
//             return data.location.record
//         } catch (err) {
//             console.log(err)
//             return null
//         }
// }

export const fetchLocation = async (ip) => {
    try {
        const res = await fetch(`http://localhost:3000/get_location/?ip_address=${ip}`)
        const data = await res.json()
        console.log(data.record.location)
        return data.record.location
        // return data.location.record
    } catch (err) {
        console.log(err)
        return null
    }
}