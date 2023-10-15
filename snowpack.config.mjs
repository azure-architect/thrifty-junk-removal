export default {
    packageOptions:{
        source:'local'
    },
    plugins:[
        ['@snowpack/plugin-sass',{
            'compilerOptions':{
                style: 'compressed',
                loadPath: [
                    '/scss/main.scss'
                    
                ]
            }
        }]
    ]
}