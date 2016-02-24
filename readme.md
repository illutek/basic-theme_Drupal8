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
```
{% include  '/partials/header.html.twig' %} 
```
dit vanuit de map templates, op deze manier lukt het niet.

```
{% include directory ~ '/templates/partials/header.html.twig' %} 
```
dit lukt wel de file waar deze code zitwoont in templates/layout/page.html.twig

##page.html.twig
###Voorwaardelijke opmaak
Sidebar-first in HTML na de main-content, willen dit wel voor de main-content tonen en de
main-content breedte col-sm-... aanpassen afhankelijk van ja of nee first- en second-sidebar,
dit alles op de page.html.twig en niet op yoursite.theme (vroegere yoursite.php file)
```
{# Content #}
        {% set content_classes = [
        page.sidebar_first and page.sidebar_second ? 'col-sm-6 col-sm-push-3',
        page.sidebar_first and page.sidebar_second is empty ? 'col-sm-9 col-sm-push-3',
        page.sidebar_first is empty and page.sidebar_second ? 'col-sm-9',
        page.sidebar_first is empty and page.sidebar_second is empty ? 'col-sm-12'
        ] %}
    <section{{ content_attributes.addClass(content_classes) }}>
        {# the content #}
    </section>
        
{# Sidebar First #}
        {% set first_classes = [
                page.sidebar_first and page.sidebar_second ? 'col-sm-3 col-sm-pull-6',
                page.sidebar_first and page.sidebar_second is empty ? 'col-sm-3 col-sm-pull-9'
                ] %}
        {% if page.sidebar_first %}
                {% block sidebar_first %}
                    <aside {{ attributes.addClass(first_classes) }} role="complementary">
                        {{ page.sidebar_first }}
                    </aside>
                % endblock %}
        {% endif %}
        
{# Sidebar Second #}
        {% if page.sidebar_second %}
                {% block sidebar_second %}
                    <aside class="col-sm-3" role="complementary">
                        {{ page.sidebar_second }}
                    </aside>
                {% endblock %}
        {% endif %}
```
Het waarom nu op de twig pagina's en niet meer op de yoursite.theme (bij Drupal7 template.php file, 
wat ook in orde is, zie de code op illutek8.theme.  
Voor de uitleg<br />
https://www.drupal.org/node/2329901  
https://www.drupal.org/node/2315471  



                

