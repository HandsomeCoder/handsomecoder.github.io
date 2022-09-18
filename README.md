## My Portfolio

### Datasource

Application is designed in such a way that data and code is logical separated which help so to change the data with modifying the code.


_Profile Information_

* Profile information is stored in profile_info.json which is located at following location.
```
src/data/profile_info.json
```

_i18n keystore_

* Application is designed to have i18n where data is mapped with key and all the key has mapped translation stored in i18n_keystore
```
src/data/i18n_keystore.json
```

### Steps to run

#### For Development

1. To run development server 
```
ng serve
```

#### For Production

1. To run development server 
```
npm run deploy-prod
```