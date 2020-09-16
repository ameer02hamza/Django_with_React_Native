from django.db import models

# Create your models here.


class Test(models.Model):
    title = models.CharField(default="", max_length=20)
    comment = models.CharField(default="", max_length=80)
    price = models.DecimalField(max_digits=4, default=0.0, decimal_places=1)
    image = models.ImageField(upload_to="photos/", default="")

    def __str__(self):
        return self.title
