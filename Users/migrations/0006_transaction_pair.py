# Generated by Django 5.0.1 on 2024-01-28 22:07

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('Users', '0005_alter_customuser_email'),
    ]

    operations = [
        migrations.AddField(
            model_name='transaction',
            name='pair',
            field=models.CharField(max_length=20, null=True),
        ),
    ]