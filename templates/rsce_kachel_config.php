<?php
return array(
  'label' => array('Kachel', ''),
  'types' => array('content', 'module'),
  'contentCategory' => 'texts',
  'moduleCategory' => 'miscellaneous',
  'beTemplate' => 'be_wildcard',
  'standardFields' => array(),
  'wrapper' => array(
    'type' => 'none'
  ),
  'fields' => array(
    'title' => array(
      'label' => array('Titel', ''),
      'eval' => array('tl_class' => 'w50'),
      'inputType' => 'text'
    ),
    'subheadline' => array(
      'label' => array('Unterüberschrift', ''),
      'eval' => array('tl_class' => 'w50'),
      'inputType' => 'text'
    ),
    'imageDescription' => array(
      'label' => array('Bild', ''),
      'inputType' => 'group',
    ),
    'image' => array(
      'label' => array('Bild', ''),
      'inputType' => 'fileTree',
      'eval' => array(
        'filesOnly' => true,
        'multiple' => false
      )
    ),
    'linkDescirption' => array(
      'label' => array('Link-Information', ''),
      'inputType' => 'group',
    ),
    'link' => array(
      'label' => array('Link', 'Auf welche Seite wird verlinkt?'),
      'inputType' => 'pageTree'
    ),
    'categoryDescription' => array(
      'label' => array('Kategorie-Information', 'Nur für Projekte'),
      'inputType' => 'group',
    ),
    'category' => array(
      'label' => array('Kategorie', 'Zu welcher Leistung gehört dieses Projekt?'),
      'inputType' => 'checkbox',
      'eval' => array('multiple' => true),
      'options' => array('Dachsanierungen', 'Zimmerei', 'Maurer', 'Spezialbau', 'Innovation')
    )
  )
);
