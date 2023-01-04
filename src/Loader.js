
export const priceLoader = async ({params}) => {

    const symbol = params.symbol
   
    const apiKey = "60133351-069E-454B-A9BA-1D88B572EA3A"
   
    return (await fetch(`http://rest-sandbox.coinapi.io/v1/exchangerate/${symbol}/USD?apikey=${apiKey}`)).json()
   } 