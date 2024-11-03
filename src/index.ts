import { PythonShell,Options } from "python-shell";

// Define a type for the expected input data
const runPythonShell=(data:Object,filename:string):Promise<any>=>{
    var resdata:any;
    return new Promise((resolve,reject)=>{
        const option:Options={
            mode:"json",
            scriptPath:"./scripts",
            pythonOptions: ["-u"],
            args: [JSON.stringify(data)],
        }
        PythonShell.run(filename,option).then((value)=>{
            //console.log("python script successfully completed ")
            resdata=value[0]
            resolve(JSON.parse(resdata))
        }).catch((err)=>{
            reject(err)
        })
    })
}
