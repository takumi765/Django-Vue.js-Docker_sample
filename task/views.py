from django.shortcuts import redirect, render
from django.views.generic import View
from django.http import JsonResponse
from .models import Task

""" takumi takumi """
class TaskView(View):
    def get(self, request):
        # リクエストがjson形式のとき
        if request.headers.get("Content-Type") == "application/json":
            # すべてのtaskを辞書型で受け取る
            tasks = Task.objects.values()
            tasks_list = list(tasks)
            # json形式でレスポンスを返す
            return JsonResponse(tasks_list, safe=False, status=200)
        return render(request, "task_list.html")