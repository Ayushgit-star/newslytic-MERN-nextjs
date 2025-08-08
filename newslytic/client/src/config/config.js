const production = 'production'
const development = 'development'

const mode = development
let base_url = ''

if (mode === production) {
    base_url = ""
} else {
    base_url = 'http://localhost:5000'
}

export { base_url }

// If mode is "development", base_url is set to your local backend.
// If mode is "production", base_url is set to an empty string (you would usually put your live API URL here).