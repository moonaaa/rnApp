import {AsyncStorage} from 'react-native'

export default class StorageUtil {
    static setData(keyName, keyData){
        let promise = new Promise((resolve, reject)=>{
            AsyncStorage.setItem(keyName, keyData, (error)=>{
                if(error){
                    return resolve('存储失败')
                }else{
                    return resolve('存储成功')
                }
            })
        })
        return promise
    }
    static getData(keyName){
        let promise = new Promise((resolve, reject)=>{
            AsyncStorage.getItem(keyName, (error,result)=>{
                if(error){
                    return resolve('获取失败')
                }else{
                    return resolve(result)
                }
            })
        })
        return promise
    }
    static deleteData(keyName){
        let promise = new Promise((resolve, reject)=>{
            AsyncStorage.removeItem(keyName, (error)=>{
                if(error){
                    return resolve('删除失败')
                }else{
                    return resolve('删除成功')
                }
            })
        })
        return promise
    }
}