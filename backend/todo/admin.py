from django.contrib import admin
from .models import Todo, Level

class TodoAdmin(admin.ModelAdmin):
    list_display = ('title', 'description', 'completed')

admin.site.register(Todo, TodoAdmin)
admin.site.register(Level)

# Register your models here.
