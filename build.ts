import Build from '0.extends.build'
import { FILES } from './env'
class Init extends Build<typeof FILES>{
    constructor() {
        super(FILES)
        this.createChunk('web', { filename: "index.js" })
            .module_rules('babel-loader4', 'style/antd')
            .plugins_html({ htmltplFile: 'index.html' })
            .save()
        this.build({ banner: 'TEL13520521413' })
    }
}

new Init()