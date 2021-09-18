# Generated by Django 3.2.3 on 2021-09-10 11:39

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    initial = True

    dependencies = [
        ('user', '0001_initial'),
    ]

    operations = [
        migrations.CreateModel(
            name='ProductModel',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('product_img', models.ImageField(upload_to='')),
                ('product_name', models.CharField(max_length=100)),
                ('product_type', models.CharField(max_length=100)),
                ('product_lend_h', models.CharField(max_length=50)),
                ('product_lend_d', models.CharField(max_length=50)),
                ('product_detail', models.TextField()),
                ('created_at', models.DateTimeField(auto_now_add=True)),
                ('updated_at', models.DateTimeField(auto_now=True)),
                ('author', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='user.usermodel')),
            ],
        ),
    ]
