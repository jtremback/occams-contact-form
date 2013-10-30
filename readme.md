This is a very simple contact form for Heroku with the Sendgrid addon.

You will need to set several Heroku environment variables to make this work:

```bash
heroku config:set EMAIL_TO=my.email@example.com EMAIL_FROM=contactform@mywebsite.com EMAIL_SUBJECT="Example subject"
```