# Generated by Django 4.2.3 on 2023-09-04 03:51

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('firstapp', '0002_products'),
    ]

    operations = [
        migrations.AlterField(
            model_name='products',
            name='contact',
            field=models.CharField(max_length=30),
        ),
    ]
