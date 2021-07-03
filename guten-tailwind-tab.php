<?php
/*
Plugin Name: Guten Tailwind Tab
Description: Gutenberg Tailwind Tab
Author: Ahsan Shaheen
Version: 1.0
*/

use GTT\Includes\Scripts;

final class Guten_Tailwind_Tab
{
    private static $instance = null;

    private function __construct()
    {
    }

    public static function instance()
    {
        if (!isset(self::$instance)) {
            self::$instance = new self();
            self::$instance->define_constants();
            self::$instance->includes();
            self::$instance->dependency_class_instance();
        }

        return self::$instance;
    }

    public function dependency_class_instance()
    {
        Scripts::instance();
    }

    public function includes()
    {
        include GTT_PLUGIN_FILE . 'vendor/autoload.php';
    }

    public function define_constants()
    {
        define('GTT_PLUGIN_FILE', plugin_dir_path(__FILE__));
        define('GTT_PLUGIN_DIST_FILE_PATH', plugin_dir_path(__FILE__) . 'dist');
        define('GTT_PLUGIN_DIST_FILE_URL', plugin_dir_url(__FILE__) . 'dist');
        define('GTT_PLUGIN_SRC_FILE_URL', plugin_dir_url(__FILE__) . 'src');
    }
}

function guten_tailwind_tab()
{
    return Guten_Tailwind_Tab::instance();
}

guten_tailwind_tab();
