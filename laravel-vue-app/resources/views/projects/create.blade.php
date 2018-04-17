<!DOCTYPE html>
<html lang="en">
    <head>
        <!-- Required meta tags -->
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
        <title>Page Title</title>

        <!-- Bootstrap CSS -->
        <link rel="stylesheet" type="text/css" href="https://cdnjs.cloudflare.com/ajax/libs/bulma/0.7.0/css/bulma.min.css">
        <link rel="stylesheet" type="text/css" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css">
        <style>
            body {
                padding-top: 40px;
            }
        </style>
    </head>
    <body>
        <div id="app" class="container">
            {{--@include('projects.list')--}}
            <!--when you type clear errors, target input name-->
            <form method="POST" action="/projects" @submit.prevent="onSubmit" @keydown="errors.clear($event.target.name)"><!--listening for when the form is submitted, prevent default option-->
              @csrf
              <div class="field">
              <label class="label">Project Name</label>
              <div class="control has-icons-left has-icons-right">
                <!--So we have data for the name input...v-models-->
                <input class="input" type="text" name="name" placeholder="Name" v-model="name">
                <span class="icon is-small is-left">
                  <i class="fas fa-user"></i>
                </span>
                <span class="icon is-small is-right">
                  <i class="fas fa-check"></i>
                </span>
              </div>
              <!--help span is displayed whether there is an error or not-->
              <span class="help is-danger" v-if="errors.has('name')" v-text="errors.get('name')"></span>
            </div>

            <div class="field">
              <label class="label">Project Description</label>
              <div class="control has-icons-left has-icons-right">
                <input class="input" type="text" name="description" placeholder="Description" v-model="description">
                <span class="icon is-small is-left">
                  <i class="fas fa-envelope"></i>
                </span>
                <span class="icon is-small is-right">
                  <i class="fas fa-exclamation-triangle"></i>
                </span>
              </div>
              <span class="help is-danger" v-if="errors.has('description')" v-text="errors.get('description')"></span>
            </div>
            <div class="field">
              <div class="control">
                <!--if there are errors on the form disable submit button-->
                <button class="button is-link" :disabled="errors.any()">Submit</button>
              </div>
            </div>
            </form>
        </div>

        <script src="https://cdnjs.cloudflare.com/ajax/libs/vue/2.5.16/vue.js"></script>
        <script src="https://unpkg.com/axios/dist/axios.min.js"></script>
        <script src="/js/app.js"></script>
    </body>
</html>
