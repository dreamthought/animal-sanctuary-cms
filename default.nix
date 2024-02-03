{ pkgs ? import <nixpkgs> {} }:

(pkgs.buildFHSEnv {
  name = "nvm";
  targetPkgs = pkgs: (with pkgs; [
    udev
    glibc
    gcc
    zsh
    vim
  ]);
  multiPkgs = pkgs: (with pkgs; [
  ]);
  runScript = "zsh";
}).env

