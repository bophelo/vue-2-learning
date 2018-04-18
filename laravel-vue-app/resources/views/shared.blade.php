<!DOCTYPE html>
<html>
<head>
    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <title>My App</title>
</head>
<body>
    <div id="one">
        <h1>@{{ shared.user.name }}</h1>
    </div>
    <div id="two">
        <h1>@{{ shared.user.name }}</h1>
    </div>

    <script src="https://cdnjs.cloudflare.com/ajax/libs/vue/2.5.16/vue.js"></script>
    <script src="/js/shared.js"></script>
</body>
</html>
