const apiRequest = async (url='', optionsObj= null,
    errMsg= null) =>{
        try{
            const response = await fetch(url,optionsObj) //optionsObj contains the added item and the fecth does the rest to update the db.json
            if(!response.ok) throw Error("Please reload")
        }catch(err){
            errMsg=err.Message
        }finally{
            return errMsg
        }
    }

    export default apiRequest