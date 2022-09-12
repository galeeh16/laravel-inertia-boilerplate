<!DOCTYPE html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">
  <head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">

    {{-- <link rel="stylesheet" href="{{ asset('assets/css/app.css') }}"> --}}
    <link rel="stylesheet" href="{{ asset('assets/css/app.css') }}">
    <script type="text/javascript" async defer src="{{ asset('bootstrap.bundle.min.js') }}"></script>
    @vite('resources/js/app.js')
    @inertiaHead
  </head>
  <body>
    @inertia
  </body>
</html>
