一个完整的可用的beego架构，除了tests
```
User registration:
request:
   POST  /v1/user
    {
        name: wujq,
        passwd: 123456
        
    }
response:
    {
        status: "success"  #  or failed
        
    }
```
``` 
User login:
   request:
        POST /v1/login
        {
            name: wujq,
            passwd: 123456  
        }
    response:
        {
            status: failed,
            "ermsg": username/password is wrong
        } 
   
        or 
        {
            status: success,
            token: ...
        }

```
```
User reflashToken:
    request:
        Post /v1/reflash
    response:
        {
            status: failed
        } 
   
        or 
        {
            status: success,
            token: ...
        }
        
``` 
mysql数据库配置:
```
MYSQLUSERNAME 数据库用户名，默认root
MYSQLPASSWD 数据库密码
MYSQLHOST    数据库host，默认localhost
MYSQLDBNAME   数据库名称,默认mysql
MYSQLPORT      数据库端口，默认3306
```
