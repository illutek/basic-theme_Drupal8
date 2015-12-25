#Starters theme voor Drupal 8
Referentie https://www.youtube.com/channel/UCeq8ZhO8N3TzL42bnkVJJfA

Dit basic Drupal 8 theme met Bootstrap als framework, dan is het Drupal theme
Bootstrap https://www.drupal.org/project/bootstrap een mooi referentie theme

##Navigation
Om het bootstrap menu en Drupal 8 te laten samenwerken, een aantal files hiervoor
Komt van Koen Timmers, had graag gevonden waar dit van komt.
*menu.html.twig 
*menu--account.html.twig
*menu-local-task.html.twig
*menu-local-tasks.html.twig
*menu--main.html.twig
Bovenstaande werkt prima, enkel het parent menu item daar kan niet meer naartoe 
gebrowsd, dit dient aangeklikt worden voordat het submenu items getoond worden,
voordeel hiervan is dan weer dat het bij mobile apparten kan gebruikt.

Een andere manier uitgetest, zie mijn-menu--main.html.twig en navigation.js en ook wat scss
op _navigation.scss, submenu wordt getoond bij hover maar geeft dan weer een probleem
bij mobile toestellen.

Ook dit eens bekijken ivm menu systeem
http://drupal.stackexchange.com/questions/141347/alter-menu-item-markup-in-drupal-8

##Includes
´´´
{% include  '/partials/header.html.twig' %} 
´´´
dit vanuit de map templates, op deze manier lukt het niet.

´´´
{% include directory ~ '/templates/partials/header.html.twig' %} 
´´´
dit lukt wel de file waar deze code zitwoont in templates/layout/page.html.twig
