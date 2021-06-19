<?php

namespace GTT\Includes;

defined( 'ABSPATH' ) || exit;

class Scripts {
    private static $instance;
    public function __construct()
    {
        add_action('init',[$this ,'registerBlock']);
        add_action('enqueue_block_editor_assets',[$this,'blockEditorAssets']);
    }

    public static function instance() {
        if( !isset( self::$instance ) ) {
            self::$instance = new self();
        }

        return self::$instance;
    }

    public function registerBlock() {
        register_block_type('gtt/guten-tailwind-tab',[
            'editor_script' => 'gtt-block'
        ]);
    }

    public function blockEditorAssets() {
        $dependencies = require_once (GTT_PLUGIN_DIST_FILE_PATH . '/blocks.asset.php');
        wp_register_script(
            'gtt-block',
            GTT_PLUGIN_DIST_FILE_URL . '/blocks.js',
            $dependencies['dependencies'],
            $dependencies['version'],
            true
        );
    }
}