import axios from "axios";

const ClientDataManipulation = async (  onSuccess: (arg0: any) => any,onFailure: (arg0: any) => any, method: string,url:string, params?: any, payload?: any ) => {
    if (method === 'get') {
            console.log(12345)
             axios.get(`${url}`, {
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json'
                },
                withCredentials: true,
            }).then((response) => {
                onSuccess(response)
            }).catch((e:any)=> { return onFailure(e) })
        
    }
    if (method === 'post') {
        try {
            const response: any = await axios.post(`${url}`,payload, {
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json'
                },
                withCredentials: true,
            })
            if (response) {
                return onSuccess(response);
            }
        } catch (e:any) { return onFailure(e) }
    }
    if (method === 'patch') {
        axios.patch(`${url}`,payload, {
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json'
                },
                withCredentials: true,
            }).then((response) =>{
                 onSuccess(response);
            }).catch ((e:any)=> {  onFailure(e) })
    }

}
export default ClientDataManipulation