from django.shortcuts import render
from django.views.generic import View

from .models import Task


class TaskView(View):
    def get(self, request):
        params = {}
        params['task'] = Task.objects.all()
        return render(request, "task_list.html", params)