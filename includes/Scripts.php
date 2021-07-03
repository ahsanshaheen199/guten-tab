<?php

namespace GTT\Includes;

defined('ABSPATH') || exit;

class Scripts
{
    private static $instance;
    public function __construct()
    {
        add_action('init', [$this, 'registerBlock']);
        add_action('wp_enqueue_scripts', [$this, 'frontendAssets']);
    }

    public static function instance()
    {
        if (!isset(self::$instance)) {
            self::$instance = new self();
        }

        return self::$instance;
    }

    public function registerBlock()
    {
        $dependencies = require_once(GTT_PLUGIN_DIST_FILE_PATH . '/blocks.asset.php');
        wp_register_script(
            'gtt-block',
            GTT_PLUGIN_DIST_FILE_URL . '/blocks.js',
            $dependencies['dependencies'],
            $dependencies['version'],
            true
        );

        wp_register_style(
            'gtt-block',
            GTT_PLUGIN_DIST_FILE_URL . '/blocks.css',
            [],
            $dependencies['version'],
            'all'
        );

        wp_register_style(
            'gtt-block-frontend',
            GTT_PLUGIN_DIST_FILE_URL . '/blocks.css',
            [],
            $dependencies['version'],
            'all'
        );

        register_block_type('gtt/guten-tailwind-tab', [
            'api_version' => 2,
            'style'         => 'gtt-block-frontend',
            'editor_script' => 'gtt-block',
            'editor_style'  => 'gtt-block'
        ]);
    }

    public function frontendAssets()
    {
        wp_enqueue_script('gtt-frontend', GTT_PLUGIN_SRC_FILE_URL . '/frontend.js', ['jquery'], '1.0', true);
    }
}
